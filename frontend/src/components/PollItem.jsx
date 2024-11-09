import PropTypes from "prop-types";

function PollItem({ option }) {
  return (
    <div className="flex items-center">
      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-xl font-roboto font-medium text-neutral-950">{option.name}</p>
        <p className="text-xl font-roboto font-medium text-neutral-950">{option.votes}</p>
      </div>
    </div>
  );
}

PollItem.propTypes = {
  option: PropTypes.any,
};

export default PollItem;
