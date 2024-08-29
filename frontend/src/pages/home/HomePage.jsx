import { useGetAllUsersQuery } from "../../redux/api/userApiSlice";

export const HomePage = () => {
  const { data: allUsers, error, isLoading } = useGetAllUsersQuery();

  console.log(allUsers);
  return <div>HomePage</div>;
};
