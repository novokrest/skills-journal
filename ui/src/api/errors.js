export function extractApiError (apiError) {
  const response = apiError.response
  if (response.status === 500 && response.data) {
    return response.data.error
  } else {
    return { code: response.status, message: response.statusText }
  }
}
