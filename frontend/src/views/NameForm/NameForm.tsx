import React from 'react';
import { Form } from './_components/Form';
import { Result } from './_components/Result';
import { useNameForm } from './hooks/useNameForm';
import './styles/NameForm.css';

export const NameForm: React.FC = () => {
  const { name, nameData, hasError, isLoading, onChange, onSubmit } =
    useNameForm();

  return (
    <div className="container">
      <h1 className="title">Name Information</h1>

      <Form
        name={name}
        isSearchLoading={isLoading}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {hasError && <p className="error">An error occurred</p>}

      {nameData && <Result data={nameData} />}
    </div>
  );
};
