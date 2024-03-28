import { createDirectus, authentication, rest } from '@directus/sdk';

const client = createDirectus('https://manage.redevs.org').with(authentication()).with(rest());

export default client;