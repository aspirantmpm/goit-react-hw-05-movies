import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Label, Input, Form, Button } from './Globalstyle';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim());
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Search movies:
        <Input
          onChange={handleChange}
          placeholder={'Enter a movie'}
          value={query}
          name="query"
          type="text"
        />
      </Label>
      <Button type="submit">
        <AiOutlineSearch size={28} />
      </Button>
    </Form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
