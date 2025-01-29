import React from 'react';

interface FormProps {
  name: string;
  isSearchLoading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({
  name,
  isSearchLoading,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="name" className="label">
        Enter a name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Type a name..."
        required
        className="input"
      />
      <button type="submit" disabled={isSearchLoading} className="button">
        {isSearchLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};
