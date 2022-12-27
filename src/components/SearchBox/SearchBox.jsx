import { Box } from 'components/Box/Box';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Box>
      <label>
        Seatch movies
        <input
          type="text"
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
      </label>
    </Box>
  );
};
