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

