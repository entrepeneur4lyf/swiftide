window.BENCHMARK_DATA = {
  "lastUpdate": 1719786789638,
  "repoUrl": "https://github.com/bosun-ai/swiftide",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c16c8e8fd732588021e01c887ddde82deb8b982",
          "message": "fix(deps): update rust crate strum to v0.26.3 (#101)\n\n[![Mend\r\nRenovate](https://app.renovatebot.com/images/banner.svg)](https://renovatebot.com)\r\n\r\nThis PR contains the following updates:\r\n\r\n| Package | Type | Update | Change |\r\n|---|---|---|---|\r\n| [strum](https://togithub.com/Peternator7/strum) | dependencies | patch\r\n| `0.26.2` -> `0.26.3` |\r\n\r\n---\r\n\r\n### Release Notes\r\n\r\n<details>\r\n<summary>Peternator7/strum (strum)</summary>\r\n\r\n###\r\n[`v0.26.3`](https://togithub.com/Peternator7/strum/blob/HEAD/CHANGELOG.md#0263-strummacros)\r\n\r\n[Compare\r\nSource](https://togithub.com/Peternator7/strum/compare/v0.26.2...v0.26.3)\r\n\r\n- [#&#8203;344](https://togithub.com/Peternator7/strum/pull/344): Hide\r\n`EnumTable` because it's going to be deprecated in the next\r\n    version.\r\n- [#&#8203;357](https://togithub.com/Peternator7/strum/pull/357): Fixes\r\nan incompatiblity with `itertools` by using the fully\r\n    qualified name rather than the inherent method.\r\n- [#&#8203;345](https://togithub.com/Peternator7/strum/pull/345): Allows\r\nunnamed tuple like variants to use their variants in\r\nstring interpolation. `#[strum(to_string = \"Field 0: {0}, Field 1:\r\n{1})\")]` will now work for tuple variants\r\n\r\n</details>\r\n\r\n---\r\n\r\n### Configuration\r\n\r\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\r\nAutomerge - At any time (no schedule defined).\r\n\r\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\r\nare satisfied.\r\n\r\n♻ **Rebasing**: Whenever PR becomes conflicted, or you tick the\r\nrebase/retry checkbox.\r\n\r\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\r\nagain.\r\n\r\n---\r\n\r\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\r\nthis box\r\n\r\n---\r\n\r\nThis PR has been generated by [Mend\r\nRenovate](https://www.mend.io/free-developer-tools/renovate/). View\r\nrepository job log\r\n[here](https://developer.mend.io/github/bosun-ai/swiftide).\r\n\r\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzNy40MjAuMSIsInVwZGF0ZWRJblZlciI6IjM3LjQyMC4xIiwidGFyZ2V0QnJhbmNoIjoibWFzdGVyIiwibGFiZWxzIjpbXX0=-->\r\n\r\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-28T17:12:58+02:00",
          "tree_id": "eb36e9c783ec680f318560c7e53855f7474652c9",
          "url": "https://github.com/bosun-ai/swiftide/commit/5c16c8e8fd732588021e01c887ddde82deb8b982"
        },
        "date": 1719587822385,
        "tool": "cargo",
        "benches": [
          {
            "name": "load_1",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "load_10",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "run_local_pipeline",
            "value": 837,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "timonv@gmail.com",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "929410cb1c2d81b6ffaec4c948c891472835429d",
          "message": "docs(readme): add diagram to the readme (#107)",
          "timestamp": "2024-06-29T22:47:44+02:00",
          "tree_id": "99e2fc152be373ae77bff10332a77589f31907db",
          "url": "https://github.com/bosun-ai/swiftide/commit/929410cb1c2d81b6ffaec4c948c891472835429d"
        },
        "date": 1719694296634,
        "tool": "cargo",
        "benches": [
          {
            "name": "load_1",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "load_10",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "run_local_pipeline",
            "value": 837,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "timonv@gmail.com",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a88651df8c6b91add03acfc071fb9479545b8af",
          "message": "feat(ingestion_pipeline): implement filter (#109)",
          "timestamp": "2024-06-30T23:57:58+02:00",
          "tree_id": "f00872417dae4ea6faa90f1928aa0af9695bba91",
          "url": "https://github.com/bosun-ai/swiftide/commit/6a88651df8c6b91add03acfc071fb9479545b8af"
        },
        "date": 1719784898765,
        "tool": "cargo",
        "benches": [
          {
            "name": "load_1",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "load_10",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "run_local_pipeline",
            "value": 837,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "timonv@gmail.com",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "committer": {
            "email": "mail@timonv.nl",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "distinct": true,
          "id": "a12cce230032eebe2f7ff1aa9cdc85b8fc200eb1",
          "message": "fix(openai): add tests for builder",
          "timestamp": "2024-07-01T00:15:11+02:00",
          "tree_id": "4d51f3f7e0532cecac98f8a82c9c4946e8e3c487",
          "url": "https://github.com/bosun-ai/swiftide/commit/a12cce230032eebe2f7ff1aa9cdc85b8fc200eb1"
        },
        "date": 1719785958253,
        "tool": "cargo",
        "benches": [
          {
            "name": "load_1",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "load_10",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "run_local_pipeline",
            "value": 836,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "timonv@gmail.com",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "committer": {
            "email": "timonv@gmail.com",
            "name": "Timon Vonk",
            "username": "timonv"
          },
          "distinct": true,
          "id": "162c6ef2a07e40b8607b0ab6773909521f0bb798",
          "message": "chore: ensure feat is always in Added",
          "timestamp": "2024-07-01T00:29:13+02:00",
          "tree_id": "40ce2cdb8819bfb1f1897e6bd9c35527602e29cf",
          "url": "https://github.com/bosun-ai/swiftide/commit/162c6ef2a07e40b8607b0ab6773909521f0bb798"
        },
        "date": 1719786788931,
        "tool": "cargo",
        "benches": [
          {
            "name": "load_1",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "load_10",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "run_local_pipeline",
            "value": 837,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}