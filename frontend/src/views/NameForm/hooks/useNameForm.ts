import React, { useState } from 'react';
import {
  getNameData,
  NameData,
} from '../../../application/services/nameDataService';

interface Props {
  name: string;
  nameData: NameData | undefined;
  hasError: boolean;
  isLoading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => Promise<void>;
}

export const useNameForm = (): Props => {
  const [name, setName] = useState('');
  const [nameData, setNameData] = useState<NameData | undefined>(undefined);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setHasError(false);
    setNameData(undefined);
    setIsLoading(true);

    try {
      const result = await getNameData(name);
      setNameData(result);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    nameData,
    hasError,
    isLoading,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};
