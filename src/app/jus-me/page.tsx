'use client';
import { validationSchema } from '@/validation';
import { Button, Input } from '@nextui-org/react';
import React, { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface ProfileInput {
  name: string;
  bankAccount: string;
  bankName: string;
  phoneNumber: string;
}

export default function MyBio() {
  const { validateProfileSubmition } = validationSchema();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: yupResolver(validateProfileSubmition),
  });

  const onSubmit: SubmitHandler<ProfileInput> = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h1 className="my-20 text-3xl font-bold">
        Demo NextUI with redux toolkit
      </h1>
      <div className="flex space-x-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2">
            <Input
              placeholder="Enter your name"
              type="text"
              label="Name"
              {...register('name')}
              errorMessage={errors.name?.message}
            />
            <Input
              placeholder="Enter your bank account"
              type="text"
              label="Bank account"
              {...register('bankAccount')}
              errorMessage={errors.bankAccount?.message}
            />
            <Input
              placeholder="Enter your bank name"
              type="text"
              label="Bank name"
              {...register('bankName')}
              errorMessage={errors.bankName?.message}
            />
            <Input
              placeholder="Enter your phone number"
              type="text"
              label="Phone number"
              {...register('phoneNumber')}
              errorMessage={errors.phoneNumber?.message}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
        <div className="flex flex-col space-y-4">
          <h1>Result</h1>
        </div>
      </div>
    </Fragment>
  );
}
