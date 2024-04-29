# Rust Programming Guide

Welcome to this Rust Programming Guide, designed for beginners looking to understand the fundamentals of Rust programming. Below you will find a detailed explanation of key topics along with practical examples.

## Contents

1. [Variables and Mutability](#variables-and-mutability)
2. [Functions](#functions)
3. [Loops](#loops)
4. [Control Statements](#control-statements)
5. [Structs (Similar to Classes in OOP)](#structs-similar-to-classes-in-oop)
6. [Operators](#operators)

---

## Variables and Mutability

In Rust, variables are immutable by default. Use the `mut` keyword to make them mutable.

### Example

```rust
fn main() {
    let x = 5; // immutable
    let mut y = 10; // mutable
    println!("x is {}", x);
    y = 15;
    println!("y is now {}", y);
}
```
## Functions

Functions in Rust are defined using the `fn` keyword. Rust functions can also be associated with data types (similar to methods in OOP).

### Example

```rust
fn main() {
    println!("5 + 3 = {}", add(5, 3));
}

fn add(x: i32, y: i32) -> i32 {
    x + y
}
```

## Loops

Rust provides several looping constructs: `loop`, `while`, and `for`.

### Example

```rust
fn main() {
    let mut count = 0;
    
    // Using 'loop'
    loop {
        if count >= 5 {
            break;
        }
        println!("count = {}", count);
        count += 1;
    }

    // Using 'while'
    while count < 10 {
        println!("count = {}", count);
        count += 1;
    }

    // Using 'for' and a range
    for number in 0..5 {
        println!("number = {}", number);
    }
}
```

## Control Statements

Control statements in Rust include `if`, `else`, and `match` (akin to `switch` in other languages).

### Example

```rust
fn main() {
    let number = 7;

    // Using if-else
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    // Using match
    match number {
        0 => println!("zero"),
        1 => println!("one"),
        _ => println!("something else"), // _ is the default case
    }
}
```

## Structs (Similar to Classes in OOP)

Rust uses structs to create custom data types. While Rust doesn't have classes, structs are used along with `impl` blocks to organize associated functions (methods).

### Example

```rust
struct Point {
    x: f64,
    y: f64,
}

impl Point {
    fn distance(&self) -> f64 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn main() {
    let point = Point { x: 3.0, y: 4.0 };
    println!("Distance from origin: {}", point.distance());
}
```

## Operators

Rust supports a variety of operators, such as arithmetic (`+`, `-`, `*`, `/`, `%`), logical (`&&`, `||`, `!`), comparison (`==`, `!=`, `<`, `>`, `<=`, `>=`), and more.

### Example

```rust
fn main() {
    let a = 5;
    let b = 3;

    // Arithmetic operators
    println!("{} + {} = {}", a, b, a + b);
    println!("{} - {} = {}", a, b, a - b);

    // Logical operators
    let x = true;
    let y = false;
    println!("x && y is {}", x && y);
    println!("x || y is {}", x || y);

    // Comparison operators
    println!("a == b is {}", a == b);
    println!("a != b is {}", a != b);
}
```
