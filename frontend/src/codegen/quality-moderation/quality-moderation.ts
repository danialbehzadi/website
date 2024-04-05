/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete200,
  FailedByGuideline,
  GetQualityModerationStatusQualityModerationStatusGetParams,
  HTTPValidationError,
  QualityModerationDashboardResponse,
  QualityModerationResponse,
  QualityModerationStatus,
  RequestReviewForAppQualityModerationAppIdRequestReviewPost200,
  SetFullscreenAppQualityModerationAppIdFullscreenPost200,
  SetFullscreenAppQualityModerationAppIdFullscreenPostParams,
  SetQualityModerationForAppQualityModerationAppIdPost200,
  UpsertQualityModeration,
} from ".././model"

/**
 * @summary Get Quality Moderation Status
 */
export const getQualityModerationStatusQualityModerationStatusGet = (
  params?: GetQualityModerationStatusQualityModerationStatusGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<QualityModerationDashboardResponse>> => {
  return axios.get(`/quality-moderation/status`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetQualityModerationStatusQualityModerationStatusGetQueryKey = (
  params?: GetQualityModerationStatusQualityModerationStatusGetParams,
) => {
  return [`/quality-moderation/status`, ...(params ? [params] : [])] as const
}

export const getGetQualityModerationStatusQualityModerationStatusGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getQualityModerationStatusQualityModerationStatusGet>
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    params?: GetQualityModerationStatusQualityModerationStatusGetParams,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getQualityModerationStatusQualityModerationStatusGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetQualityModerationStatusQualityModerationStatusGetQueryKey(params)

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof getQualityModerationStatusQualityModerationStatusGet>
      >
    > = ({ signal }) =>
      getQualityModerationStatusQualityModerationStatusGet(params, {
        signal,
        ...axiosOptions,
      })

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<typeof getQualityModerationStatusQualityModerationStatusGet>
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetQualityModerationStatusQualityModerationStatusGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getQualityModerationStatusQualityModerationStatusGet>
    >
  >
export type GetQualityModerationStatusQualityModerationStatusGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Quality Moderation Status
 */
export const useGetQualityModerationStatusQualityModerationStatusGet = <
  TData = Awaited<
    ReturnType<typeof getQualityModerationStatusQualityModerationStatusGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetQualityModerationStatusQualityModerationStatusGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getQualityModerationStatusQualityModerationStatusGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetQualityModerationStatusQualityModerationStatusGetQueryOptions(
      params,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Quality Moderation Stats
 */
export const getQualityModerationStatsQualityModerationFailedByGuidelineGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<FailedByGuideline[]>> => {
  return axios.get(`/quality-moderation/failed-by-guideline`, options)
}

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryKey =
  () => {
    return [`/quality-moderation/failed-by-guideline`] as const
  }

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryKey()

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
        >
      >
    > = ({ signal }) =>
      getQualityModerationStatsQualityModerationFailedByGuidelineGet({
        signal,
        ...axiosOptions,
      })

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
      >
    >
  >
export type GetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryError =
  AxiosError<unknown>

/**
 * @summary Get Quality Moderation Stats
 */
export const useGetQualityModerationStatsQualityModerationFailedByGuidelineGet =
  <
    TData = Awaited<
      ReturnType<
        typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getQualityModerationStatsQualityModerationFailedByGuidelineGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const queryOptions =
      getGetQualityModerationStatsQualityModerationFailedByGuidelineGetQueryOptions(
        options,
      )

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
      queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
  }

/**
 * @summary Get Quality Moderation For App
 */
export const getQualityModerationForAppQualityModerationAppIdGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<QualityModerationResponse>> => {
  return axios.get(`/quality-moderation/${appId}`, options)
}

export const getGetQualityModerationForAppQualityModerationAppIdGetQueryKey = (
  appId: string,
) => {
  return [`/quality-moderation/${appId}`] as const
}

export const getGetQualityModerationForAppQualityModerationAppIdGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    appId: string,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getQualityModerationForAppQualityModerationAppIdGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetQualityModerationForAppQualityModerationAppIdGetQueryKey(appId)

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
      >
    > = ({ signal }) =>
      getQualityModerationForAppQualityModerationAppIdGet(appId, {
        signal,
        ...axiosOptions,
      })

    return {
      queryKey,
      queryFn,
      enabled: !!appId,
      ...queryOptions,
    } as UseQueryOptions<
      Awaited<
        ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetQualityModerationForAppQualityModerationAppIdGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
    >
  >
export type GetQualityModerationForAppQualityModerationAppIdGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Quality Moderation For App
 */
export const useGetQualityModerationForAppQualityModerationAppIdGet = <
  TData = Awaited<
    ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getQualityModerationForAppQualityModerationAppIdGet>
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetQualityModerationForAppQualityModerationAppIdGetQueryOptions(
      appId,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Set Quality Moderation For App
 */
export const setQualityModerationForAppQualityModerationAppIdPost = (
  appId: string,
  upsertQualityModeration: UpsertQualityModeration,
  options?: AxiosRequestConfig,
): Promise<
  AxiosResponse<SetQualityModerationForAppQualityModerationAppIdPost200>
> => {
  return axios.post(
    `/quality-moderation/${appId}`,
    upsertQualityModeration,
    options,
  )
}

export const getSetQualityModerationForAppQualityModerationAppIdPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof setQualityModerationForAppQualityModerationAppIdPost>
      >,
      TError,
      { appId: string; data: UpsertQualityModeration },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<typeof setQualityModerationForAppQualityModerationAppIdPost>
    >,
    TError,
    { appId: string; data: UpsertQualityModeration },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof setQualityModerationForAppQualityModerationAppIdPost>
      >,
      { appId: string; data: UpsertQualityModeration }
    > = (props) => {
      const { appId, data } = props ?? {}

      return setQualityModerationForAppQualityModerationAppIdPost(
        appId,
        data,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type SetQualityModerationForAppQualityModerationAppIdPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<typeof setQualityModerationForAppQualityModerationAppIdPost>
    >
  >
export type SetQualityModerationForAppQualityModerationAppIdPostMutationBody =
  UpsertQualityModeration
export type SetQualityModerationForAppQualityModerationAppIdPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Set Quality Moderation For App
 */
export const useSetQualityModerationForAppQualityModerationAppIdPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<typeof setQualityModerationForAppQualityModerationAppIdPost>
    >,
    TError,
    { appId: string; data: UpsertQualityModeration },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getSetQualityModerationForAppQualityModerationAppIdPostMutationOptions(
      options,
    )

  return useMutation(mutationOptions)
}
/**
 * @summary Get Quality Moderation Status For App
 */
export const getQualityModerationStatusForAppQualityModerationAppIdStatusGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<QualityModerationStatus>> => {
  return axios.get(`/quality-moderation/${appId}/status`, options)
}

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryKey =
  (appId: string) => {
    return [`/quality-moderation/${appId}/status`] as const
  }

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
      >
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    appId: string,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryKey(
        appId,
      )

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
        >
      >
    > = ({ signal }) =>
      getQualityModerationStatusForAppQualityModerationAppIdStatusGet(appId, {
        signal,
        ...axiosOptions,
      })

    return {
      queryKey,
      queryFn,
      enabled: !!appId,
      ...queryOptions,
    } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
      >
    >
  >
export type GetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Quality Moderation Status For App
 */
export const useGetQualityModerationStatusForAppQualityModerationAppIdStatusGet =
  <
    TData = Awaited<
      ReturnType<
        typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
      >
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    appId: string,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getQualityModerationStatusForAppQualityModerationAppIdStatusGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const queryOptions =
      getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetQueryOptions(
        appId,
        options,
      )

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
      queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
  }

/**
 * @summary Request Review For App
 */
export const requestReviewForAppQualityModerationAppIdRequestReviewPost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<
  AxiosResponse<RequestReviewForAppQualityModerationAppIdRequestReviewPost200>
> => {
  return axios.post(
    `/quality-moderation/${appId}/request-review`,
    undefined,
    options,
  )
}

export const getRequestReviewForAppQualityModerationAppIdRequestReviewPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof requestReviewForAppQualityModerationAppIdRequestReviewPost
        >
      >,
      TError,
      { appId: string },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof requestReviewForAppQualityModerationAppIdRequestReviewPost
      >
    >,
    TError,
    { appId: string },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof requestReviewForAppQualityModerationAppIdRequestReviewPost
        >
      >,
      { appId: string }
    > = (props) => {
      const { appId } = props ?? {}

      return requestReviewForAppQualityModerationAppIdRequestReviewPost(
        appId,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type RequestReviewForAppQualityModerationAppIdRequestReviewPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof requestReviewForAppQualityModerationAppIdRequestReviewPost
      >
    >
  >

export type RequestReviewForAppQualityModerationAppIdRequestReviewPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Request Review For App
 */
export const useRequestReviewForAppQualityModerationAppIdRequestReviewPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<
        typeof requestReviewForAppQualityModerationAppIdRequestReviewPost
      >
    >,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getRequestReviewForAppQualityModerationAppIdRequestReviewPostMutationOptions(
      options,
    )

  return useMutation(mutationOptions)
}
/**
 * @summary Delete Review Request For App
 */
export const deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete =
  (
    appId: string,
    options?: AxiosRequestConfig,
  ): Promise<
    AxiosResponse<DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete200>
  > => {
    return axios.delete(`/quality-moderation/${appId}/request-review`, options)
  }

export const getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete
        >
      >,
      TError,
      { appId: string },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete
      >
    >,
    TError,
    { appId: string },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete
        >
      >,
      { appId: string }
    > = (props) => {
      const { appId } = props ?? {}

      return deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete(
        appId,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete
      >
    >
  >

export type DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Delete Review Request For App
 */
export const useDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof deleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete
        >
      >,
      TError,
      { appId: string },
      TContext
    >
    axios?: AxiosRequestConfig
  }) => {
    const mutationOptions =
      getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMutationOptions(
        options,
      )

    return useMutation(mutationOptions)
  }
/**
 * @summary Set Fullscreen App
 */
export const setFullscreenAppQualityModerationAppIdFullscreenPost = (
  appId: string,
  params: SetFullscreenAppQualityModerationAppIdFullscreenPostParams,
  options?: AxiosRequestConfig,
): Promise<
  AxiosResponse<SetFullscreenAppQualityModerationAppIdFullscreenPost200>
> => {
  return axios.post(`/quality-moderation/${appId}/fullscreen`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getSetFullscreenAppQualityModerationAppIdFullscreenPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof setFullscreenAppQualityModerationAppIdFullscreenPost>
      >,
      TError,
      {
        appId: string
        params: SetFullscreenAppQualityModerationAppIdFullscreenPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<typeof setFullscreenAppQualityModerationAppIdFullscreenPost>
    >,
    TError,
    {
      appId: string
      params: SetFullscreenAppQualityModerationAppIdFullscreenPostParams
    },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof setFullscreenAppQualityModerationAppIdFullscreenPost>
      >,
      {
        appId: string
        params: SetFullscreenAppQualityModerationAppIdFullscreenPostParams
      }
    > = (props) => {
      const { appId, params } = props ?? {}

      return setFullscreenAppQualityModerationAppIdFullscreenPost(
        appId,
        params,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type SetFullscreenAppQualityModerationAppIdFullscreenPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<typeof setFullscreenAppQualityModerationAppIdFullscreenPost>
    >
  >

export type SetFullscreenAppQualityModerationAppIdFullscreenPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Set Fullscreen App
 */
export const useSetFullscreenAppQualityModerationAppIdFullscreenPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<
      ReturnType<typeof setFullscreenAppQualityModerationAppIdFullscreenPost>
    >,
    TError,
    {
      appId: string
      params: SetFullscreenAppQualityModerationAppIdFullscreenPostParams
    },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getSetFullscreenAppQualityModerationAppIdFullscreenPostMutationOptions(
      options,
    )

  return useMutation(mutationOptions)
}