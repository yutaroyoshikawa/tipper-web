import React, { useEffect } from "react";
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
  performance: GetPerformanceQuery | null;
};

const IndexPage: NextPage<Props> = ({ performance }) => {
  const loginUser = useSelector((store: StoreState) => store.app.loginUser);
  const [
    getPerformance,
    { called, loading, error, data },
  ] = useGetPerformanceLazyQuery({
    variables: {
      performanceId: "hoge",
    },
  });

  useEffect(() => {
    if (loginUser && !performance) {
      getPerformance();
    }
  }, [loginUser, getPerformance, performance]);

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
  try {
    const { data } = await createIsomophicApiClient(authToken)
      .query<GetPerformanceQuery>(GetPerformanceDocument, {
        performanceId: "Q9jXgHQYdAsgGTbK8B7K2",
      })
      .toPromise();

    return {
      props: {
        performance: data ?? null,
      },
    };
  } catch (error) {
    console.log("🦑");
    return {
      props: {
        performance: null,
      },
    };
  }
};

export default IndexPage;
