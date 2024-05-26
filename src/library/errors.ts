import type { UseFormSetError } from 'react-hook-form';
import type { XiorError } from 'xior';

interface FieldError {
    name: string;
    message: string;
}

interface ErrorResponse {
    message?: string;
    fields?: FieldError[];
}

export const parseError = (error: XiorError) => {
    const errorData: Record<string, any> | undefined = error.response?.data?.error;

    const formattedError: ErrorResponse = {
        message: errorData?.message,
        fields: errorData?.fields,
    };

    return formattedError;
};

export const setFieldErrors = (fields: FieldError[], setError: UseFormSetError<any>) => {
    fields.forEach(field => {
        setError(field.name, { message: field.message });
    });
};
