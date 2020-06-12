async function foo() {
    await bar();
    return 1;
}

async function bar() {
    await Promise.resolve();
    throw new Error('Bee');
}

foo().catch(err => console.log(err.stack))