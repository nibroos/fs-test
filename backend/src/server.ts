import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { UnitRoute } from '@/routes/units.route';
import { VendorRoute } from './routes/vendors.route';

ValidateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new UnitRoute(),
  new VendorRoute(),
]);

app.listen();
