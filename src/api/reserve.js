import {END_POINTS} from './end-points';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';

//---------------------CREATE BOOKING---------------------//
const post_reserve = async (
  values = {
    userId,
    restaurantId,
    reservationDate,
    reservationTime,
    note,
    phone,
    personCount,
  },
) => {
  const bookData = {
    userId: values.userId,
    restaurantId: values.restaurantId,
    reservationDate: values.reservationDate,
    reservationTime: values.reservationTime,
    note: values.note,
    phone: values.phone,
    personCount: values.personCount,
  };
  const response = await axios.post(
    END_POINTS.BOOK_CONTROLLER.POST_BOOK,
    bookData,
  );
  return response.data;
};
export const useReserve = () => {
  return useMutation(post_reserve);
};

//---------------------UPDATE BOOKING-----------------------//
const update_reserve = async (
  values = {
    id,
    userId,
    bookingStatus,
    restaurantId,
    reservationDate,
    reservationTime,
    note,
    phone,
    personCount,
  },
) => {
  const updateData = {
    id: values.id,
    userId: values.userId,
    bookingStatus: values.bookingStatus,
    restaurantId: values.restaurantId,
    reservationDate: values.reservationDate,
    reservationTime: values.reservationTime,
    note: values.note,
    phone: values.phone,
    personCount: values.personCount,
  };
  const response = await axios.put(
    END_POINTS.BOOK_CONTROLLER.UPDATE_BOOK,
    updateData,
  );
  return response;
};

export const useUpdate = () => {
  return useMutation(update_reserve);
};

//------------------GET BOOKING BY USER-------------------//
const get_reserve = async id => {
  const URL = `${END_POINTS.BOOK_CONTROLLER.GET_BOOK}/${id}`;
  const response = await axios.get(URL);
  return response.data;
};
export const useGetReserveById = id => {
  const {data, refetch, isLoading} = useQuery(['get_reserve', id], () =>
    get_reserve(id),
  );
  return {data, refetch, isLoading};
};

//---------------------DELETE BOOKING BY ID----------------------//
const delete_reserve = async id => {
  const URL = `${END_POINTS.BOOK_CONTROLLER.DELETE_BOOK}/${id}`;
  const response = await axios.delete(URL);
  return response;
};
export const useDelete = () => {
  return useMutation(delete_reserve);
};
