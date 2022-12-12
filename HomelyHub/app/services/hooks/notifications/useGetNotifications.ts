import {useQuery} from '@tanstack/react-query';
import moment from 'moment';
import {ApplicationConstant} from '../../../config/constants';
import {Notification} from '../../../model/notification';
import {queryKeys} from '../../react-query/constants';
import {
  NotificationService,
  PaginationListApiResponseOfListOfNotificationApiResponse,
} from '../../rest';

const fetchNotifications = async () => {
  return await NotificationService.notificationGetNotifications(
    ApplicationConstant.defaultPageSize,
  );
};

export const useGetNotifications = () => {
  return useQuery({
    queryKey: [queryKeys.notifications],
    queryFn: fetchNotifications,
    select: (data: PaginationListApiResponseOfListOfNotificationApiResponse) =>
      data.items?.map(
        notification =>
          <Notification>{
            date: moment(notification.date).toDate(),
            id: notification.id,
            title: notification.title,
            body: notification.body,
            read: notification.read,
            type: {
              description: notification.type?.description,
              value: notification.type?.value,
            },
            user: {
              name: notification.sender?.name,
              avatar: notification.sender?.avatar,
            },
          },
      ),
  });
};
