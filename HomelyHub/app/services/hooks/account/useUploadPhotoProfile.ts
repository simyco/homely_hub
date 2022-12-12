import {useMutation} from '@tanstack/react-query';
import {SubjectService, UpdateSubjectImageApiRequest} from '../../rest';

const uploadPhotoProfile = async (image?: string) => {
  const request: UpdateSubjectImageApiRequest = {
    image: image,
  };
  return await SubjectService.subjectProfileImage(request);
};

export const useUploadPhotoProfile = () => {
  return useMutation(uploadPhotoProfile);
};
