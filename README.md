# Overview

Simple mini framework for Express.js. Inspired By Nest.js.

## Table of Content

- [Why this project even exists](#why-this-project-even-exists)
- [Installation](#installation)
- [Simple Usage](#simple-usage)
- [Features](#features)
- [License](#license)

## Why this project even exists?

The idea of this project came `randomly`. Becouse I'm Person that likes to `experiments` and like to `write my own tools` I wanted to write my own `Implementation` of `Nest.js` and even `Swagger`. `The Endpoints Documentation` (in this project my own `Implementation of Swagger`), came randomly too. Becouse I'm too lazy for writing staic `HTML` in static `API page` I wanted to automatize it. But `My Ego` said: You can write your own `Swagger-Like`, and `Nest-Like`, `Mini Express Framework` for this type of actions. It's funny becouse few months ago, I would say that Nest.js style of writing endpoints (using decorators) is not for me. Well...

Main Philosophy of this project is `Write Less, Do More` _i think_

## Installation

1. clone repo

```bash
git clone https://github.com/Kornellen/miniFramework.git
```

2. enter miniFramework directory

3. use `npm run create:package` for \*.tgz file

4. In your new project just install this package `npm install <path_to_tgz_file>`

## Simple Usage

Simple App you can see in `examples/` directory. However there's small introduction.

### App Entry point

An example of App Entry point

```TypeScript
import { AppBootstrap } from "@miniframework/core";
import "./controllers/index.js";

const app = new AppBootstrap().start();
app.listen(8080, () => console.log(`App is working`));
```

### Decorators

Like Nest.js, this _framework_ uses decorators
Right now there are two decorators: `Route` and `Controller`

```TypeScript
import {Controller, Route} from "@miniframework/core/common"
import {Request, Response} from "express"

@Controller("/test")
class TestController {
    @Route({method: "get", path: ""})
    public helloWorld(req: Request, res: Response): void {
        res.send("Hello, World")
    }
}
```

- `@Controller` decorator param is base path of route like here `test` is path eg. /api/test

- `@Route` decorator recives param as `object`:

```
{
    method: <HTTP Request Method (get, post)>,
    path: sub-path of request eg. /getStatus or /:id,
    middlewares`: Array of middlewares (not necessary)
}
```

### Good with Object-Oriented Programming (OOP) & TypeScript

This _Framework_ is created in TypeScript and uses OOP

## Planned Features

- [] Implementation of Swagger-Like endpoint Documentation
- [] Add more decorators and functionalities

## Contributing

I'm a single person with high ambition, so if you come up with ideas or improvements feel free to contribure.

Just **fork the repo** and **open a pull request**

## LICENSE

This Project is under [MIT License](LICENSE)
