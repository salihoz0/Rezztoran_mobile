import { END_POINTS } from "./end-points";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//========== GET CATEGORY ============
const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b21pb2thIiwiaXNzIjoicmV6enRvcmFuIiwiZXhwIjoxNjc3ODUwNTE1fQ.QjQJsN-NhrpSyRf5uXVhsE7oCCCiigiSuEb-JyUUDwk';
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