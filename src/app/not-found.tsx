import status from 'http-status';

import { HttpError } from '@/components/HttpError';

export default function NotFound() {
  return (
    <HttpError statusCode={status.NOT_FOUND}>
      <p>Page you’ve requested cannot be found.</p>
    </HttpError>
  );
}
