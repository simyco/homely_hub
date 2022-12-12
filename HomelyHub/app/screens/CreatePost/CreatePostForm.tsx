import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, StyleSheet, Platform, Alert} from 'react-native';
import {Spacer} from '../../components/Layout/Spacer';
import {Category} from '../../model/category';
import {Post, PostForm} from '../../model/post';
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  KeyboardAvoidingView,
  Radio,
  Select,
  Text,
  TextArea,
  useToast,
  ZStack,
} from 'native-base';
import {useCreatePost} from '../../services/hooks/posts/useCreatePost';
import NavigationService from '../../navigation/NavigationService';
import {ToastBox} from '../../components/Toast/ToastBox';
import moment from 'moment';
import {useGetCategoriesAll} from '../../services/hooks/categories/useGetCategories';

const styles = StyleSheet.create({
  form: {margin: 10},
  section: {
    marginVertical: 5,
  },
  radiogroup: {
    alignItems: 'center',
  },
});

const isBefore = (date: any) => {
  if (!date) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date > today;
};
const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Cerco',
    value: 'Cerco',
    selected: true,
    labelStyle: {
      fontFamily: 'Roboto-Light',
    },
  },
  {
    id: '2',
    label: 'Offro',
    value: 'Offro',
    labelStyle: {
      fontFamily: 'Roboto-Light',
    },
  },
  {
    id: '3',
    label: 'Altro',
    value: 'Altro',
    labelStyle: {
      fontFamily: 'Roboto-Light',
    },
  },
];
export type CreatePostFormProps = {
  post?: Post;
};
export const CreatePostForm = ({post}: CreatePostFormProps) => {
  const {
    control,
    handleSubmit,
    setFocus,
    register,
    reset,
    setValue,
    watch,
    formState: {errors},
  } = useForm<PostForm>({
    mode: 'onSubmit',
    defaultValues: {
      type: 'Cerco',
      description: post?.description,
      name: post?.title,
      place: post?.city,
      subCategoryId: post?.subCategoryId?.toString(),
      hasAuthority: 'no',
      dueDate: post ? moment(post?.date).format('d/MM/yyyy') : '',
    },
  });
  const toast = useToast();
  useEffect(() => {
    register('dueDate', {validate: {isBefore}});
    setFocus('name');
  }, []);

  const {mutateAsync, isLoading} = useCreatePost();

  const onPostCreate = async (data: PostForm) => {
    const postCreated = await mutateAsync(data);
    if (postCreated) {
      reset({
        description: '',
        name: '',
        dueDate: '',
        place: '',
        type: '',
        hasAuthority: 'no',
        categoryId: '',
        subCategoryId: '',
      });
      toast.show({
        render: () => {
          return (
            <ToastBox>
              <Text>
                Il tuo annuncio è stato pubblicato senza alcun problema. Corri a
                vederlo!
              </Text>
            </ToastBox>
          );
        },
        placement: 'bottom',
      });

      NavigationService.navigate('PostDetail', {
        postId: postCreated.id,
      });
    }
  };

  const [category, setCategory] = useState<Category>();
  const {
    data: categories,
    isSuccess,
    isLoading: loadingCategories,
  } = useGetCategoriesAll();
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  useEffect(() => {
    if (post) {
      const categorySelected = categories?.find(
        c => c.id === post?.subCategoryId?.toString(),
      );
      setCategory(categorySelected);
      setValue('categoryId', categorySelected?.id);
      setValue('subCategoryId', categorySelected?.id);
    }
  }, [isSuccess]);

  const onPressRadioButton = (radioButtonsArray: RadioButtonProps[]) => {
    setRadioButtons(radioButtonsArray);
    const selected = radioButtonsArray.filter(c => c.selected);
    setValue('type', selected[0].label);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Box mx={'0.5'}>
        <View>
          <Controller
            control={control}
            render={() => (
              <HStack style={styles.section}>
                <Spacer />
              </HStack>
            )}
            name="type"
          />
        </View>
        {watch('type') === 'Altro' && (
          <FormControl isInvalid={'name' in errors} mt={5}>
            <ZStack reversed={true}>
              <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
                Tipologia di servizio
              </FormControl.Label>

              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="Indica la tipologia di servizio?"
                  />
                )}
                name="customType"
                rules={{maxLength: 50}}
              />
            </ZStack>
            {errors.customType && (
              <FormControl.ErrorMessage>
                Inserisci una tipologia
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
        <FormControl isInvalid={'name' in errors} mt={5}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Qual è il nome del servizio
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Qual è il nome del servizio?"
                />
              )}
              name="name"
              rules={{required: true, maxLength: 50}}
            />
          </ZStack>
          {errors.name && (
            <FormControl.ErrorMessage>
              Inserisci un nome valido
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        {!loadingCategories && (
          <FormControl mt={5} isInvalid={'categoryId' in errors}>
            <ZStack reversed={true}>
              <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
                A che categoria appartiene il servizio
              </FormControl.Label>

              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <Select
                    minWidth="200"
                    accessibilityLabel="A che categoria appartiene il servizio?"
                    placeholder="A che categoria appartiene il servizio?"
                    _selectedItem={{
                      endIcon: <CheckIcon size="5" />,
                    }}
                    onValueChange={e => {
                      const categorySelected = categories?.find(
                        c => c.id.toString() === e,
                      );
                      setCategory(categorySelected);
                      onChange(e);
                    }}
                    selectedValue={value?.toString()}
                    mt={1}>
                    {categories
                      ?.filter(c => c.parentId === '0')
                      .map(categoryMapped => (
                        <Select.Item
                          key={categoryMapped.id}
                          label={categoryMapped.name}
                          value={categoryMapped.id.toString()}
                        />
                      ))}
                  </Select>
                )}
                name="categoryId"
                rules={{required: true, maxLength: 50}}
              />
            </ZStack>
            {errors.categoryId && (
              <FormControl.ErrorMessage>
                Inserisci una categoria valida
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}

        <FormControl mt={5} isInvalid={'subCategoryId' in errors}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              A che sotto-categoria appartiene il servizio
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Select
                  minWidth="200"
                  accessibilityLabel="A che categoria appartiene il servizio?"
                  placeholder="A che categoria appartiene il servizio?"
                  _selectedItem={{
                    endIcon: <CheckIcon size="5" />,
                  }}
                  onValueChange={onChange}
                  selectedValue={value}
                  mt={1}>
                  {categories
                    ?.filter(c => c.parentId === category?.id)
                    ?.map(categoryMapped => (
                      <Select.Item
                        key={categoryMapped.id}
                        label={categoryMapped.name}
                        value={categoryMapped.id}
                      />
                    ))}
                </Select>
              )}
              name="subCategoryId"
              rules={{required: true, maxLength: 50}}
            />
          </ZStack>
          {errors.subCategoryId && (
            <FormControl.ErrorMessage>
              Inserisci una sotto categoria valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl mt={5} isInvalid={'place' in errors}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Luogo in cui ricerchi o offri il servizio{' '}
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Inserisci il luogo"
                />
              )}
              name="place"
              rules={{required: true, maxLength: 50}}
            />
          </ZStack>
          {errors.place && (
            <FormControl.ErrorMessage>
              Inserisci un luogo valido
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={'description' in errors} mt={5}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Descrizione
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextArea
                  autoCompleteType={'none'}
                  size={'xl'}
                  value={value}
                  placeholder="Descrivi brevemente il servizio"
                  onChangeText={val => onChange(val)}
                  numberOfLines={4}
                />
              )}
              name="description"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.description && (
            <FormControl.ErrorMessage>
              Inserisci una descrizione valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        {watch('type') === 'Altro' && (
          <FormControl my={5}>
            <FormControl.Label mb={5}>
              È presente un ente/azienda?
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Radio.Group
                  name="hasAuthority"
                  flexDirection="row"
                  value={value}
                  onChange={val => onChange(val)}>
                  <Radio value="yes">
                    <Text mr={1}>Si, è presente</Text>
                  </Radio>
                  <Radio value="no">
                    <Text mr={1}>No, non è presente</Text>
                  </Radio>
                </Radio.Group>
              )}
              name="hasAuthority"
              rules={{maxLength: 50}}
            />
          </FormControl>
        )}

        {watch('hasAuthority') === 'yes' && (
          <FormControl isInvalid={'name' in errors} mt={5}>
            <ZStack reversed={true}>
              <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
                Nome dell’ente/azienda
              </FormControl.Label>

              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="Inserisci il nome dell’ente/azienda"
                  />
                )}
                name="authority"
                rules={{maxLength: 50}}
              />
            </ZStack>
            {errors.authority && (
              <FormControl.ErrorMessage>
                Inserisci una ente
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
        <Spacer height={16} />
        <Button isLoading={isLoading} onPress={handleSubmit(onPostCreate)}>
          {post ? 'Aggiorna' : 'Pubblica'}
        </Button>
        <Button
          variant="link"
          onPress={() => {
            reset({
              description: '',
              name: '',
              dueDate: '',
              place: '',
              type: '',
              subCategoryId: '',
              categoryId: '',
            });
          }}>
          Annulla
        </Button>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default CreatePostForm;
