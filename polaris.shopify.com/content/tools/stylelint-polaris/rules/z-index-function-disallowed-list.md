---
title: z-index/function-disallowed-list
description: Disallows use of the legacy z-index Sass function.
keywords:
  - stylelint
  - z-index
  - z-index rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="z-" />

```diff
// Do
+ z-index: var(--p-z-index-1);
// Don't
- z-index: z-index(content);
```

<RulePostamble />
