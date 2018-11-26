import { readFileSync } from "fs";

import { fetch } from "../fetchWebSetup";

const INIT_TEMPLATE = readFileSync(`${__dirname}/../../templates/hosting/init.js`, "utf8");

export interface ImplicitInitRequest {
  projectNumber: number;
}

export interface ImplicitInitResponse {
  js: string;
  json: string;
}

export async function init(options: ImplicitInitRequest): Promise<ImplicitInitResponse> {
  const config = await fetch(options);
  const configJson = JSON.stringify(config, null, 2);
  return {
    js: INIT_TEMPLATE.replace("{/*--CONFIG--*/}", configJson),
    json: configJson,
  };
}
