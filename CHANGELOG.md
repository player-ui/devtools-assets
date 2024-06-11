# 0.3.0 (Tue Jun 11 2024)

#### 🚀 Enhancement

- [Devtools/GED] Filter in Obbject Inspector [#27](https://github.com/player-ui/devtools-assets/pull/27) ([@lexfm](https://github.com/lexfm))

#### 🐛 Bug Fix

- Release main [#34](https://github.com/player-ui/devtools-assets/pull/34) ([@intuit-svc](https://github.com/intuit-svc))
- Configure Renovate [#30](https://github.com/player-ui/devtools-assets/pull/30) ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 3

- [@intuit-svc](https://github.com/intuit-svc)
- [@renovate[bot]](https://github.com/renovate[bot])
- Alex Fimbres ([@lexfm](https://github.com/lexfm))

---

# 0.2.0 (Wed Jun 05 2024)

### Release Notes

#### feat: flame-graph ([#25](https://github.com/player-ui/devtools-assets/pull/25))

Adds `flame-graph` component.

```ts
<FlameGraph binding={b`my_binding`} height={100} width={200} />
```

---

#### 🚀 Enhancement

- feat: flame-graph [#25](https://github.com/player-ui/devtools-assets/pull/25) ([@rafbcampos](https://github.com/rafbcampos))

#### 🐛 Bug Fix

- Release main [#28](https://github.com/player-ui/devtools-assets/pull/28) ([@intuit-svc](https://github.com/intuit-svc))
- stackedView width fix [#26](https://github.com/player-ui/devtools-assets/pull/26) ([@mercillo](https://github.com/mercillo))
- [Devtools/file upload] Asset [#24](https://github.com/player-ui/devtools-assets/pull/24) ([@lexfm](https://github.com/lexfm))
- [Devtools/radio-group] asset [#23](https://github.com/player-ui/devtools-assets/pull/23) ([@lexfm](https://github.com/lexfm) [@rafbcampos](https://github.com/rafbcampos))

#### Authors: 4

- [@intuit-svc](https://github.com/intuit-svc)
- Alex Fimbres ([@lexfm](https://github.com/lexfm))
- Marlon "Marky" Ercillo ([@mercillo](https://github.com/mercillo))
- Rafael Campos ([@rafbcampos](https://github.com/rafbcampos))

---

# 0.1.1 (Thu May 02 2024)

#### 🐛 Bug Fix

- Release main [#22](https://github.com/player-ui/devtools-assets/pull/22) ([@intuit-svc](https://github.com/intuit-svc))
- [Devtools] Toggle Asset [#20](https://github.com/player-ui/devtools-assets/pull/20) ([@lexfm](https://github.com/lexfm))
- chore: deps version bumps [#20](https://github.com/player-ui/devtools-assets/pull/20) (rafael_campos@intuit.com)
- chore: removes unused deps [#21](https://github.com/player-ui/devtools-assets/pull/21) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))

#### ⚠️ Pushed to `main`

- chore: bump player version (rafael_campos@intuit.com)

#### Authors: 4

- [@intuit-svc](https://github.com/intuit-svc)
- Alex Fimbres ([@lexfm](https://github.com/lexfm))
- Rafael Campos ([@rafbcampos](https://github.com/rafbcampos))
- rcampos2 (rafael_campos@intuit.com)

---

# 0.1.0 (Tue Apr 30 2024)

### Release Notes

#### feat: adds code-editor asset ([#17](https://github.com/player-ui/devtools-assets/pull/17))

Added `code-editor` asset that can be used to edit JSON content and call an expression on change:

```typescript
import { CodeEditor } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [<CodeEditor exp={e`my_expression`} binding={b`my_binding`} />],
};
```

---

#### 🚀 Enhancement

- feat: adds code-editor asset [#17](https://github.com/player-ui/devtools-assets/pull/17) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))

#### 🐛 Bug Fix

- Release main [#19](https://github.com/player-ui/devtools-assets/pull/19) ([@intuit-svc](https://github.com/intuit-svc))
- Devtools gen:asset Enhancements [#18](https://github.com/player-ui/devtools-assets/pull/18) ([@lexfm](https://github.com/lexfm))
- fix table styles [#16](https://github.com/player-ui/devtools-assets/pull/16) (marlon_ercillo@intuit.com [@mercillo](https://github.com/mercillo))
- Docs/devtools site [#14](https://github.com/player-ui/devtools-assets/pull/14) ([@lexfm](https://github.com/lexfm))

#### Authors: 6

- [@intuit-svc](https://github.com/intuit-svc)
- Alex Fimbres ([@lexfm](https://github.com/lexfm))
- marky ercillo (marlon_ercillo@intuit.com)
- Marlon "Marky" Ercillo ([@mercillo](https://github.com/mercillo))
- Rafael Campos ([@rafbcampos](https://github.com/rafbcampos))
- rcampos2 (rafael_campos@intuit.com)

---

# 0.0.2 (Wed Apr 10 2024)

### Release Notes

#### feat: adds copy-to-clipboard asset ([#13](https://github.com/player-ui/devtools-assets/pull/13))

Adds `CopyToClipboard` asset.

#### Console, Table and Stacked View ([#9](https://github.com/player-ui/devtools-assets/pull/9))

Adds console, table and stacked view.

```ts
const console = <Console exp={e`my_expression`} binding={b`my_binding`} />
const table = <Table binding={b`my_binding`} />
const stacked-view = (
    <StackedView>
      <StackedView.Header>
        <Text>Header</Text>
      </StackedView.Header>
      <StackedView.Main>
        <Text>Main</Text>
      </StackedView.Main>
      <StackedView.Footer>
        <Text>Footer</Text>
      </StackedView.Footer>
    </StackedView>
)
```

---

#### 🐛 Bug Fix

- chore: bump player and storybook versions [#15](https://github.com/player-ui/devtools-assets/pull/15) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- feat: adds copy-to-clipboard asset [#13](https://github.com/player-ui/devtools-assets/pull/13) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- feat: set/get expression for evaluation [#12](https://github.com/player-ui/devtools-assets/pull/12) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- chore: bumps version [#11](https://github.com/player-ui/devtools-assets/pull/11) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- Console, Table and Stacked View [#9](https://github.com/player-ui/devtools-assets/pull/9) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- storybook [#8](https://github.com/player-ui/devtools-assets/pull/8) (rafael_campos@intuit.com [@mercillo](https://github.com/mercillo) [@rafbcampos](https://github.com/rafbcampos))
- Devtools/Input asset [#6](https://github.com/player-ui/devtools-assets/pull/6) (alejandro_fimbres@intuit.com [@lexfm](https://github.com/lexfm))
- Refactor [#7](https://github.com/player-ui/devtools-assets/pull/7) (rafael_campos@intuit.com [@rafbcampos](https://github.com/rafbcampos))
- Devtools/navigation [#5](https://github.com/player-ui/devtools-assets/pull/5) (marlon_ercillo@intuit.com [@mercillo](https://github.com/mercillo))
- Devtools/action assets [#4](https://github.com/player-ui/devtools-assets/pull/4) (marlon_ercillo@intuit.com [@mercillo](https://github.com/mercillo))
- folder resutrcture [#3](https://github.com/player-ui/devtools-assets/pull/3) (marlon_ercillo@intuit.com [@mercillo](https://github.com/mercillo))
- Simple Object Inspector [#1](https://github.com/player-ui/devtools-assets/pull/1) (marlon_ercillo@intuit.com [@mercillo](https://github.com/mercillo))

#### ⚠️ Pushed to `main`

- chore: storybook docs (rafael_campos@intuit.com)
- chore: asset generator (rafael_campos@intuit.com)
- chore: text dsl tests (rafael_campos@intuit.com)
- chore: text using chakra and fix config (rafael_campos@intuit.com)
- WIP data inspector (marlon_ercillo@intuit.com)
- added object inspector (marlon_ercillo@intuit.com)
- added devtools-ds console as example (marlon_ercillo@intuit.com)
- initial setup (marlon_ercillo@intuit.com)
- Initial commit ([@mercillo](https://github.com/mercillo))

#### Authors: 6

- afimbres (alejandro_fimbres@intuit.com)
- Alex Fimbres ([@lexfm](https://github.com/lexfm))
- Marlon "Marky" Ercillo ([@mercillo](https://github.com/mercillo))
- mercillo (marlon_ercillo@intuit.com)
- Rafael Campos ([@rafbcampos](https://github.com/rafbcampos))
- rcampos2 (rafael_campos@intuit.com)

---

