import type { NextPage } from "next";
import { useGetUser } from "actions/user";
import { BasePage } from "components/BasePage";
import { BaseLayout } from "components/layouts/BaseLayout";

const Secret: NextPage = () => {
  const { data, loading } = useGetUser();

  if (loading) return <p>Loading...</p>;

  if (!data && typeof window !== "undefined") {
    window.location.assign("/api/v1/login");
    return null;
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am Secret page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

export default Secret;