import { END_POINTS } from "./end-points";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//========== GET CATEGORY ============
const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWxpaCIsImlzcyI6InJlenp0b3JhbiIsImV4cCI6MTY3NzkyNDA3NX0.Gaj_w6UJ-ZMkzFcEjeEOrMpU7Ckx7bGGbOf-CoHbOD4';
const getCategory = async () => {
    const response = await axios.get(END_POINTS.CATEGORY_CONTROLLER.GET_CATEGORY, { headers: { "Authorization": 'Bearer ' + Token } })
    return response.data
}

export const useGetCategory = () => {
    const { data, refetch, isLoading } = useQuery(['getCategory'], () => getCategory())
    return { data, refetch, isLoading }
}

//========== GET CATEGORY BY ID ==========
const getCategoryById = async (id) => {
    const URL = END_POINTS.CATEGORY_CONTROLLER.GET_CATEGORY_BY_ID.replace(':id', id)
    const response = await axios.get(URL)
    return response.data
}

export const useGetCategoryById = (id) => {
    const { data, refetch, isLoading } = useQuery(['getCategoryById', id], () => getCategoryById(id))
    return { data, refetch, isLoading }
}