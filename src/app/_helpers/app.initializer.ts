import { AuthenticationService } from '../_services/authentication.service';

export function appInitializer(authSercvice: AuthenticationService) {
  return () =>
    new Promise((Resolve) => {
      authSercvice.refreshToken().subscribe().add(Resolve);
    });
}
