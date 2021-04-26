import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StoreState } from "../../src/modules/store";
import {
  useGetPerformanceLazyQuery,
  GetPerformanceDocument,
  GetPerformanceQuery,
} from "../../src/generated/graphql";
import { getAuthToken } from "../../src/utils/authToken";
import { createIsomophicApiClient } from "../../src/utils/isomophicApi";
import { getParamFromUrl } from "../../src/utils/url";
import PerformanceDetail from "../../src/components/templates/PerformanceDetail";
import Header from "../../src/components/organisms/header";

type Props = {
  performance: GetPerformanceQuery | null;
  performanceID: string | null;
};

const PerformancesPage: NextPage<Props> = ({ performance, performanceID }) => {
  const loginUser = useSelector((store: StoreState) => store.app.loginUser);
  const [
    getPerformance,
    { called, loading, error, data },
  ] = useGetPerformanceLazyQuery({
    variables: {
      performanceId: performanceID || "",
    },
  });

  useEffect(() => {
    if (loginUser && !performance) {
      getPerformance();
    }
  }, [loginUser, getPerformance, performance]);

  return (
    <>
      <Header />
      {called && !performance && (
        <>
          {loading ? <div>loading...</div> : <div>{JSON.stringify(data)}</div>}
          {error && <div>Error!</div>}
        </>
      )}
      {performance && (
        <>
          <PerformanceDetail performance={performance} />
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  if (!ctx.params) {
    return {
      props: {
        performance: null,
        performanceID: null,
      },
    };
  }

  const performanceID = getParamFromUrl("performanceID", ctx.params);

  if (!performanceID) {
    return {
      props: {
        performance: null,
        performanceID: null,
      },
    };
  }

  const authToken = getAuthToken(ctx);

  try {
    const { data } = await createIsomophicApiClient(authToken)
      .query<GetPerformanceQuery>(GetPerformanceDocument, {
        performanceId: performanceID,
      })
      .toPromise();

    return {
      props: {
        performance: data ?? null,
        performanceID,
      },
    };
  } catch (error) {
    return {
      props: {
        performance: null,
        performanceID: null,
      },
    };
  }
};

export default PerformancesPage;

const PerformanceTitle = styled.h1`
  font-size: 80px;
`;

const TitleWrap = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
`;
