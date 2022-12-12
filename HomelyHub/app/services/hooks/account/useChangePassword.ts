import {ChangePasswordForm} from './../../../model/user';
import {useMutation} from '@tanstack/react-query';
import {SubjectService, UpdatePasswordApiRequest} from '../../rest';

const changePassword = async ({
  passwordActual,
  passwordNew,
}: ChangePasswordForm) => {
  const request: UpdatePasswordApiRequest = {
    currentPassword: passwordActual,
    newPassword: passwordNew,
  };
  return await SubjectService.subjectPassword(request);
};

export const useChangePassword = () => {
  return useMutation(changePassword);
};
