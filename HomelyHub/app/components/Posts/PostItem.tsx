import React from 'react';
import {Post} from '../../model/post';
import NavigationService from '../../navigation/NavigationService';
import {
  Button,
  Card,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Modal,
  Text,
  useDisclose,
  useToast,
  VStack,
} from 'native-base';
import {
  useLikePost,
  useUnlikePost,
} from '../../services/hooks/posts/useLikePost';
import {useAuth} from '../../services/hooks/account/useAuth';
import {useDeletePost} from '../../services/hooks/posts/useDeletePost';
import {ToastBox} from '../Toast/ToastBox';
import LikePost from './LikePost';
import {CategoryButton} from '../../screens/Home/components';

type PostItemProps = {
  post: Post;
  withActions?: boolean;
};

const PostItem = ({post, withActions}: PostItemProps) => {
  const {user} = useAuth();

  const {mutateAsync: deletePostAsync, isLoading: deletePostLoading} =
    useDeletePost();
  const {mutateAsync} = useLikePost();
  const {mutateAsync: unlikeAsync} = useUnlikePost();
  const {isOpen, onOpen, onClose} = useDisclose();
  const toast = useToast();
  const PostItemBodySection = () => {
    return (
      <VStack space={3} flex={1}>
        <Divider />

        <HStack space={2} alignContent={'space-around'}>
          <HStack space={1} flex={1}>
            <Icon size={'xl'} name={'map-marker'} color="primary.900" />

            <Text fontSize={'md'} color={'gray.600'}>
              {post.city}
            </Text>
          </HStack>
          <HStack space={1} flex={1}>
            <Icon
              size={'xl'}
              name={'clock-time-five-outline'}
              color="primary.900"
            />

            <Text fontSize={'md'} color={'gray.600'}></Text>
          </HStack>
          <HStack space={1} flex={1}>
            <Icon size={'xl'} name={'calendar-month'} color="primary.900" />

            <Text fontSize={'md'} color={'gray.600'}></Text>
          </HStack>
          {/* TODO <Row>
            <Icon
              name={'bell'}
              size={25}
              color={AppStyles.color.COLOR_INACTIVE}
            />
            <Switch />
          </Row> */}
        </HStack>
        <HStack>
          <Text fontSize="xl">{post.description}</Text>
        </HStack>
      </VStack>
    );
  };

  const PostItemHeaderSection = () => {
    return (
      <HStack space={1} mb={2}>
        {post.category && (
          <CategoryButton icon={'home'} text={post.categoryDescription} />
        )}
        <VStack space={1} justifyContent={'center'} ml={3} flex={1}>
          <Text fontWeight={'semibold'} fontSize="xl">
            {post.title}
          </Text>
          <Text>{post.description}</Text>
        </VStack>
        {post.creatorId === user?.id && (
          <VStack minW={'10'} space={1}>
            <IconButton
              icon={<Icon size={'md'} name={'pencil'} color="coolGray.800" />}
              size={'md'}
              onPress={() =>
                NavigationService.navigate('EditPost', {postId: post.id})
              }
            />
            <IconButton
              icon={<Icon size={'md'} name={'delete'} color="coolGray.800" />}
              size={'md'}
              onPress={onOpen}
            />
          </VStack>
        )}

        {/* <Stars
          half={false}
          default={0}
          update={val => {}}
          spacing={4}
          starSize={50}
          count={1}
          fullStar={
            <Icon name={'star'} style={[styles.favouritePost]} size={30} />
          }
          emptyStar={
            <Icon
              name={'star'}
              style={[styles.favouritePost, styles.unfavouritePost]}
              size={30}
            />
          }
        /> */}
      </HStack>
    );
  };
  const onPressPost = () => {
    NavigationService.navigate('PostDetail', {
      postId: post.id,
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.Body>
            <VStack space={5}>
              <Center>
                <Image
                  flex={1}
                  alt="delete"
                  resizeMode="contain"
                  size={'xl'}
                  source={require('../../assets/images/delete_post.png')}
                />
              </Center>
              <Center>
                <Heading>Eliminiamo?</Heading>
                <Text textAlign={'center'}>
                  Vuoi eliminare questo post? La scelta è irreversibile
                </Text>
              </Center>
              <Button
                isLoading={deletePostLoading}
                onPress={async () => {
                  const deletedPost = await deletePostAsync(post.id);
                  if (deletedPost) {
                    toast.show({
                      render: () => {
                        return (
                          <ToastBox>
                            <Text>
                              Il tuo annuncio è stato eliminato con successo.
                            </Text>
                          </ToastBox>
                        );
                      },
                      placement: 'bottom',
                    });
                  }

                  onClose();
                }}>
                ELIMINA POST
              </Button>
              <Center>
                <Link onPress={onClose}>Annulla</Link>
              </Center>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Card
        my={2}
        borderWidth={0.1}
        bgColor={'white'}
        h={withActions ? 'xs' : '2xs'}>
        {/* {post.bookmarked && (
          <View style={styles.bookmark}>
            <Icon
              name={'bookmark'}
              color={AppStyles.color.COLOR_PRIMARY}
              size={30}
            />
            <Text style={styles.bookmarkText}>
              Consigliato dal comune di Milano
            </Text>
          </View>
        )} */}
        <PostItemHeaderSection />
        <PostItemBodySection />
        {withActions ? (
          <HStack
            space={5}
            flex={1}
            px={1}
            justifyContent={'space-between'}
            alignItems={'flex-end'}>
            <Link
              _text={{
                textTransform: 'uppercase',
                fontSize: 'sm',
                color: 'primary.400',
                fontWeight: 'semibold',
              }}
              onPress={onPressPost}>
              Commenta
            </Link>
            {user?.id !== post.creatorId && (
              <Link
                _text={{
                  textTransform: 'uppercase',
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'primary.400',
                }}
                onPress={onPressPost}>
                Contatta in privato
              </Link>
            )}
            <LikePost
              likedPost={post.liked}
              onPress={async () => {
                if (post.liked) {
                  const like = await unlikeAsync(post.id);
                  console.log(like);
                } else {
                  const like = await mutateAsync(post.id);
                  console.log(like);
                }
              }}
            />
          </HStack>
        ) : (
          <VStack space={3}>
            <Text>
              Annuncio pubblicato da <Text bold>{post.creator?.name}</Text>
            </Text>
            <Divider />
            <HStack
              space={5}
              justifyContent={'space-around'}
              alignItems={'flex-end'}>
              {user?.id !== post.creatorId && (
                <Link
                  _text={{
                    textTransform: 'uppercase',
                    fontSize: 'sm',
                    color: 'primary.400',
                    fontWeight: 'semibold',
                  }}
                  onPress={onPressPost}>
                  Contatta in privato
                </Link>
              )}
              {user?.id !== post.creatorId && (
                <Link
                  _text={{
                    textTransform: 'uppercase',
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'primary.400',
                  }}
                  onPress={onPressPost}>
                  Segnala
                </Link>
              )}
            </HStack>
          </VStack>
        )}
      </Card>
    </>
  );
};

export default PostItem;
