import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { StoreState } from "../src/modules/store";
import {
  useGetPerformanceLazyQuery,
  GetPerformanceDocument,
  GetPerformanceQuery,
} from "../src/generated/graphql";
import { getAuthToken } from "../src/utils/authToken";
import { createIsomophicApiClient } from "../src/utils/isomophicApi";

type Props = {
  performance?: GetPerformanceQuery;
};

const IndexPage: NextPage<Props> = ({ performance }) => {
  const authToken = useSelector((store: StoreState) => store.app.authToken);
  const [
    getPerformance,
    { called, loading, error, data },
  ] = useGetPerformanceLazyQuery({
    variables: {
      performanceId: "hoge",
    },
  });

  React.useEffect(() => {
    if (authToken && !performance) {
      getPerformance();
    }
  }, [authToken, getPerformance, performance]);

  return (
    <>
      <h1>Hello World!</h1>
      {called && !performance && (
        <>
          {loading ? <div>loading...</div> : <div>{JSON.stringify(data)}</div>}
          {error && <div>Error!</div>}
        </>
      )}
      {performance && <div>{JSON.stringify(performance)}</div>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const authToken = getAuthToken(ctx);
  const { data } = await createIsomophicApiClient(authToken)
    .query<GetPerformanceQuery>(GetPerformanceDocument, {
      performanceId: "hoge",
    })
    .toPromise();

  return {
    props: {
      performance: data,
    },
  };
};

export default IndexPage;
