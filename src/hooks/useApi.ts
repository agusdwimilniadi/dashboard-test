import axiosInstance from "@/lib/axiosInstance";
import type { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { useState, useEffect, useCallback } from "react";

interface UseApiProps {
    url: string;
    method?: Method;
    payload?: unknown;
    config?: AxiosRequestConfig;
    autoFetch?: boolean;
}

interface UseApiReturn<T> {
    data: T | null;
    setData: React.Dispatch<React.SetStateAction<T | null>>;
    isLoading: boolean;
    error: AxiosError | null;
    refetch: () => Promise<void>;
}

export function useApi<T>(props: UseApiProps): UseApiReturn<T> {
    const {
        url,
        method = "GET",
        payload = undefined,
        config,
        autoFetch = true,
    } = props;

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response: AxiosResponse<T> = await axiosInstance.request<T>({
                url,
                method,
                data: payload,
                withCredentials: true,
                ...(config || {}),
            });

            setData(response.data);
        } catch (err) {
            setError(err as AxiosError);
        } finally {
            setIsLoading(false);
        }
    }, [url, method, payload, config]);

    useEffect(() => {
        if (autoFetch) fetchData();
    }, [fetchData, autoFetch]);

    return { data, setData, isLoading, error, refetch: fetchData };
}
