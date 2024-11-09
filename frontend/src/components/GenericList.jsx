import PropTypes from 'prop-types';
import { List } from "flowbite-react";

GenericList.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string
};

function GenericList({items, renderItem, className}) {
  return (
    <List unstyled className={className}>
      {items.map((item, index) => (
        <List.Item key={index} className='py-1 px-10'>
          {renderItem(item)}
        </List.Item>
      ))}
    </List>
  );
}

export default GenericList;
