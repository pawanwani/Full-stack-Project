import { fetchdata } from "../service/service";

export const getdata = () => async (dispatch: any) => {
  try {
    const { data } = await fetchdata();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {}
};
