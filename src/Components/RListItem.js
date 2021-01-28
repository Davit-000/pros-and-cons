import {useState} from "react";
import PropTypes from "prop-types";
import {ListItem, ListItemAvatar, ListItemText, TextField} from "@material-ui/core";

const RListItem = ({item, index, onAdd, onSave, onRemove}) => {
  const [text, setText] = useState(item.text);

  const onChange = e => {
    const {value} = e.target;

    if (value.length === 1 && !text) {
      onAdd({text: ''});
    }

    if (!value) {
      onRemove(index);
    }

    setText(value);
  };

  const onBlur = () => {
    if (!text) return;

    onSave({text}, index);
  }

  return (
    <ListItem>
      <ListItemAvatar>{index + 1}</ListItemAvatar>

      <ListItemText>
        <TextField
          onChange={onChange}
          onBlur={onBlur}
          value={text}
          fullWidth
        />
      </ListItemText>
    </ListItem>
  );
};

RListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default RListItem;
