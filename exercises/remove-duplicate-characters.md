# Remove Duplicate Characters

| Name | Notes |
| --- | --- |
| [Case Sensitive](#case-sensitive) | |
| [Case Insensitive](#case-insensitive) | |
| [Configurable](#case-insensitive) | Returns a case sensitive or insensitive match based on an argument |

## Variations

### Case Sensitive

#### Prompt

Write a function named `removeDuplicates` which takes a string and removes all duplicate characters in the String.

Examples:

```js
removeDuplicates('AABB'); // 'AB'
removeDuplicates('AaAaBbBb'); // 'AaBb'
removeDuplicates('cAtCaT'); // 'cAtCaT'
```

#### Tests

```js
describe('removeDuplicates', function() {
  it('should return a string', function() {
    expect(removeDuplicates('AABB')).to.be.a('string');
  });
  it('should return a string without duplicates', function() {
    expect(removeDuplicates('AABB')).to.be.equal('AB');
    expect(removeDuplicates('AaAaBbBb')).to.be.equal('AaBb');
    expect(removeDuplicates('cAtCaT')).to.be.equal('cAtCaT');
  });
});
```

### Case Insensitive

#### Prompt

Write a function named `removeDuplicatesInsensitive` which takes a string and removes all duplicate characters regardless of capitalization.

Examples:

```js
  removeDuplicatesInsensitive('AABB'); // 'AB'
  removeDuplicatesInsensitive('AaAaBbBb'); // 'AB'
  removeDuplicatesInsensitive('cAtCaT'); // 'cAt'
```

#### Tests

```js
describe('removeDuplicatesInsensitive', function() {
  it('should return a string', function() {
    expect(removeDuplicatesInsensitive('AABB')).to.be.a('string');
  });
  it('should return a string with no dupes and is case insensitive', function() {
    expect(removeDuplicatesInsensitive('AABB')).to.be.equal('AB');
    expect(removeDuplicatesInsensitive('AaAaBbBb')).to.be.equal('AB');
    expect(removeDuplicatesInsensitive('cAtCaT')).to.be.equal('cAt');
  });
});
```

### Configurable

#### Prompt

Write a function named `removeDuplicatesInsensitive` which takes a string and removes all duplicate characters. It should also take a boolean as a second argument that indicates whether the remove should be case-sensitive.

Examples:

```js
  removeDuplicates('AABB', true); // 'AB'
  removeDuplicates('AABB', false); // 'AB'
  removeDuplicates('AaAaBbBb', true); // 'AaBb'
  removeDuplicates('AaAaBbBb', false); // 'AB'
  removeDuplicates('cAtCaT', true); // 'cAtCaT'
  removeDuplicates('cAtCaT', false); // 'cAt'
```

#### Tests

```js
describe('removeDuplicatesInsensitive', function() {
  it('should return a string', function() {
    expect(removeDuplicatesInsensitive('AABB')).to.be.a('string');
  });
  it('should return a string with no dupes and is case sensitive', function() {
    expect(removeDuplicates('AABB', true)).to.be.equal('AB');
    expect(removeDuplicates('AaAaBbBb', true)).to.be.equal('AaBb');
    expect(removeDuplicates('cAtCaT', true)).to.be.equal('cAtCaT');
  });
  it('should return a string with no dupes and is not case sensitive', function() {
    expect(removeDuplicates('AABB', false)).to.be.equal('AB');
    expect(removeDuplicates('AaAaBbBb', false)).to.be.equal('AB');
    expect(removeDuplicates('cAtCaT', false)).to.be.equal('cAt');
  });
});
```
