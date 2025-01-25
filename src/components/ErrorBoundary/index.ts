import IErrorBoundaryProps from "./props";
import ErrorBoundary from "./errorboundary";
import { withErrorBoundary } from "./with";
import FallbackComponent from "./fallback";

export type { IErrorBoundaryProps };
export { ErrorBoundary, FallbackComponent, withErrorBoundary };
