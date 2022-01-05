import React from 'react';

import { CardWithTitle } from '../../components/Card/Card';
import FormCreateAcc from '../../components/FormCreateAcc/FormCreateAcc';

const CreateAccount = () => {
  return (
    <CardWithTitle title="Create your account">
      <FormCreateAcc />
    </CardWithTitle>
  );
};

export default CreateAccount;
