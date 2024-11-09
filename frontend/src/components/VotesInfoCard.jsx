import PropTypes from 'prop-types';
import Button from './Button';
import GenericList from './GenericList';
import PollItem from './PollItem';
import { Modal } from "flowbite-react";
import InputField from './InputField';
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Form as FormFormik, Formik } from 'formik';
import { postVote } from '../services/voteService';

VotesInfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

function VotesInfoCard({name, options}) {
  const [openModal, setOpenModal] = useState(true);
  const [formStatus, setFormStatus] = useState({success: null, message: ""});
  const [initialValues] = useState({
    email: "",
    opions: []
  })

  console.log(initialValues)
  useEffect(() => {
  },[])

  const validationSchema = Yup.object().shape({
    //email: Yup.string().email('Please provide a valid email.').isRequired('The email is required'),
    options: Yup.bool().oneOf([true], 'Please choose an option to vote.')
  })

  const handleSubmit = async (values, {setSubmmiting}) => {
    try{
      const voteResponse = await postVote({
        optionId: values.option,
        voterEmail: values.email
      })
      console.log(voteResponse)
      setFormStatus({success: true, message: 'Vote successfully submited'});
    } catch (error) {
      setFormStatus({success: false, message: error.message})
    } finally {
      setSubmmiting(false);
    }
  }; 

  return (
    <div className='border border-neutral-950 p-2'>
      <div className="flex flex-row justify-between w-full">
        <p className='font-roboto font-medium text-xl'>What is your {name}?</p>
        <Button className='text-xl font-medium text-blue-950' text='Vote' type='common'onClick={() => setOpenModal(true)}/>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Vote: What is your {name}?</Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({errors, touched, isSubmitting}) => (
            <FormFormik>
              <InputField 
                id='email' 
                label='Email' 
                name='email'
                type='email'
                isCorrect={!touched.email || !errors.email}
              />
              <InputField 
                id='options' 
                label='Options'
                name='options'
                type='checkbox'
                isCorrect={!touched.opions || !errors.opions}
              />
              <div className='flex flex-row space-x-4 '>
                <Button onClick={() => setOpenModal(false)}>Cancel</Button>
                <Button type='common' isSubmit disabled={isSubmitting} onClick={() => setOpenModal(false)}>
                  {isSubmitting ? 'Sending...' : 'Vote'}
                </Button>
              </div>
            </FormFormik>
            )}
          </Formik>
          {formStatus.message && (
            <p className={`mt-4 ${formStatus.success ? 'text-green-500' : 'text-red-500'}`}></p>
          )}
        </Modal.Body>
      </Modal>
      </div>
      <GenericList items={options} renderItem={((option) => <PollItem option={option}/>)}/>
    </div>
  );
}

export default VotesInfoCard;