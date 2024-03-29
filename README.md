# Luhn's algorithm

## Motivation

Make an implementation of the Luhn's algorithm using TypeScript.

## Quick start

### Install

```sh
git clone https://github.com/theodrosyimer/luhn
```

## Usage

Run:
```sh
tsx luhn.ts -h
````

```sh
Usage: tsx luhn.ts [options]

Validate a number based on Luhn algorithm and/or complete the given number to be valid according to the Luhn algorithm.
More than one occurrence of an option can be passed to the command.

Example:
  tsx luhn.ts -c 5140256942783546 -c 5140256942783646 -f 192924593889831

Options:
  -c <number>	validate the given number
  -f <number>	complete the given number
  -g [options] 	generate valid IMEI number and credit cards number (Visa, American Express and Mastercard)
  -h         	display help for the command
```

Using `-g` flag:

```sh
Usage: tsx luhn.ts -g [options]

Generate random IMEI number or credit card number by type.

Examples:
  tsx luhn.ts -g imei

  tsx luhn.ts -g card visa

  tsx luhn.ts -g card master

  tsx luhn.ts -g card amex

Commands:
  imei [length]	generate a valid IMEI number, length is OPTIONAL and if given MUST be 15, 16 or 17
  card <type>	generate a valid credit card number by type
```

## Contributors

- [Alizée](https://github.com/alifrappe)
- [BornLimitles5](https://github.com/BornLimitles5)
- [theodrosyimer](https://github.com/theodrosyimer)
