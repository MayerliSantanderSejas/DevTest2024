import Button from "../components/Button";
import VotesInfoCard from "../components/VotesInfoCard";
import { getPolls } from "../services/pollService";
import { useEffect, useState } from "react";

function MainPage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function fetchPolls() {
      try {
        const fetchPolls = await getPolls();
        setPolls(fetchPolls);
      } catch (error) {
        console.error('Error fetching polls', error)
      }
    }

    fetchPolls();
  }, [])

  return (
    <div className='flex flex-col items-center justify-center pt-16 space-y-8'>
      <div className='flex flex-row justify-between px-40 w-full'>
        <p className='font-roboto font-medium text-3xl'>Poll List</p>
        <Button className='text-3xl' text='Add New' type='common'/>
      </div>
      <div className="space-y-5 w-4/5">
        {polls.map((item, index) => (
          <VotesInfoCard
            key = {index} 
            name={item.name} 
            options={item.options} 
          />
        ))}
      </div>    
    </div>
  );
}

export default MainPage;