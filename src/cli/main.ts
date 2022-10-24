import { parseArgs, ParseArgsConfig } from "node:util";

const config: ParseArgsConfig = {
	options: {
		foo: {
			type: "string",
		},
		bar: {
			type: "boolean",
		},
	},
};

const { values } = parseArgs(config);

// node -r esbuild-register src/cli/main.ts --foo foo --bar
// { foo: 'foo', bar: true }
console.log(JSON.stringify(values));
