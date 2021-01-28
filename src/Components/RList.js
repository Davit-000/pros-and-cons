import {useState} from "react";
import PropTypes from "prop-types";
import {List, ListSubheader, Paper} from "@material-ui/core";
import RListItem from "./RListItem";

const RList = ({title}) => {
  const [items, setItems] = useState([{text: ''}]);

  const addItem = item => {
    const list = items.map(item => ({...item}));

    list.push(item);

    setItems(list);
  };

  const saveItem = (item, index) => {
    const list = items.map(item => ({...item}));

    list.splice(index, 1, item);

    setItems(list);
  }

  const removeItem = index => {
    const list = items.map(item => ({...item}));

    list.splice(index, 1);

    setItems(list);
  };

  return (
    <Paper variant="outlined" elevation={1} style={{maxHeight: 500, overflowY: 'auto'}}>
      <List subheader={<ListSubheader disableSticky>{title}</ListSubheader>}>
        {items.map((item, i) =>
          <RListItem
            onRemove={removeItem}
            onSave={saveItem}
            onAdd={addItem}
            item={item}
            index={i}
            key={i}
          />
        )}
      </List>
    </Paper>
  );
};

RList.propTypes = {
  title: PropTypes.string.isRequired
}

export default RList;
