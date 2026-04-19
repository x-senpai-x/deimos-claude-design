// screens-editorial.jsx — "Editorial" direction: warm cream, serif display, soft minimal
// Matches the Deimos website aesthetic. Premium, calm, magazine-like.

const SE = {};

SE.Serif = (p) => <span style={{fontFamily:'"Instrument Serif","Cormorant Garamond",Georgia,serif',...(p.style||{})}}>{p.children}</span>;

SE.Card = ({theme, children, style}) => (
  <div style={{background:theme.surface,borderRadius:20,padding:20,border:`1px solid ${theme.border}`,...style}}>{children}</div>
);

SE.Bar = ({theme, title, onBack, right}) => (
  <div style={{display:'flex',alignItems:'center',padding:'16px 20px',gap:14,background:theme.bg}}>
    {onBack && <button onClick={onBack} style={{background:theme.surface,border:`1px solid ${theme.border}`,width:36,height:36,borderRadius:'50%',color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="back" size={18}/></button>}
    <div style={{flex:1,fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3,color:theme.text,fontStyle:'italic'}}>{title}</div>
    {right}
  </div>
);

SE.Pill = ({theme, children, color, filled}) => (
  <span style={{
    display:'inline-flex',alignItems:'center',gap:4,
    padding:'4px 10px',borderRadius:99,fontSize:11,fontWeight:500,
    fontFamily:'Inter,sans-serif',letterSpacing:0.2,
    background: filled?(color||theme.chip):'transparent',
    color: filled?(theme.onChip):(color||theme.textDim),
    border:`1px solid ${filled?'transparent':(color||theme.border)}`,
  }}>{children}</span>
);

// ── Onboarding ──────────────────────────────────────────────
SE.Onboarding = ({theme, onDone}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',padding:'40px 28px 24px',background:theme.bg,color:theme.text}}>
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
      {/* Celestial mark */}
      <div style={{position:'relative',width:120,height:120,marginTop:-40}}>
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <radialGradient id="moonE" cx="35%" cy="35%">
              <stop offset="0%" stopColor={theme.text} stopOpacity="0.95"/>
              <stop offset="100%" stopColor={theme.text} stopOpacity="0.55"/>
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="52" fill="none" stroke={theme.text} strokeWidth="0.5" strokeDasharray="2 4"/>
          <circle cx="60" cy="60" r="40" fill="url(#moonE)"/>
          <circle cx="42" cy="48" r="5" fill={theme.bg} opacity="0.22"/>
          <circle cx="72" cy="68" r="8" fill={theme.bg} opacity="0.18"/>
          <circle cx="58" cy="75" r="3" fill={theme.bg} opacity="0.22"/>
        </svg>
      </div>

      <div>
        <div style={{fontFamily:'"Instrument Serif",serif',fontSize:64,lineHeight:0.95,letterSpacing:-2,fontWeight:400}}>Deimos</div>
        <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,color:theme.textDim,marginTop:6}}>Mobile zk benchmarking</div>
      </div>

      <div style={{fontSize:15,lineHeight:1.55,color:theme.textDim,maxWidth:300}}>
        A quiet instrument. Run zero-knowledge proofs against your device and compare frameworks by how fast, how heavy, how cool.
      </div>

      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <SE.Pill theme={theme}>Poseidon2</SE.Pill>
        <SE.Pill theme={theme}>SHA256</SE.Pill>
        <SE.Pill theme={theme}>Keccak</SE.Pill>
        <SE.Pill theme={theme}>EdDSA</SE.Pill>
        <SE.Pill theme={theme}>+6</SE.Pill>
      </div>
    </div>

    <button onClick={onDone} style={{
      padding:'16px 24px',background:theme.chrome,color:theme.onChrome,border:'none',borderRadius:99,
      fontFamily:'Inter,sans-serif',fontSize:15,fontWeight:500,cursor:'pointer',
      display:'flex',alignItems:'center',justifyContent:'center',gap:8
    }}>Begin <Icon name="forward" size={16}/></button>
    <div style={{textAlign:'center',marginTop:12,fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:13,color:theme.textMuted}}>Built by BlocSoc IITR · MIT</div>
  </div>
);

// ── Home ────────────────────────────────────────────────────
SE.Home = ({theme, state, setState, onRun, onNav}) => {
  const fw = DATA.FRAMEWORKS.find(f=>f.id===state.fw);
  const circ = DATA.CIRCUITS.find(c=>c.id===state.circuit);
  const canRun = state.fw && state.circuit && state.input;

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
      {/* Header */}
      <div style={{padding:'20px 20px 8px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:'Inter,sans-serif',fontSize:12,color:theme.textDim,letterSpacing:0.5}}>Good morning</div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:28,lineHeight:1,letterSpacing:-0.5,marginTop:2}}>Deimos</div>
        </div>
        <div style={{display:'flex',gap:6}}>
          <button onClick={()=>onNav('history')} style={{width:40,height:40,borderRadius:'50%',background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="history" size={18}/></button>
          <button onClick={()=>onNav('device')} style={{width:40,height:40,borderRadius:'50%',background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="settings" size={18}/></button>
        </div>
      </div>

      <div style={{flex:1,overflow:'auto',padding:'16px 20px 20px'}}>
        {/* Hero prompt */}
        <div style={{padding:'18px 0 22px'}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:34,lineHeight:1.05,letterSpacing:-0.8}}>
            <span style={{fontStyle:'italic',color:theme.textDim}}>what shall we</span><br/>
            <span>benchmark today?</span>
          </div>
        </div>

        {/* Config cards */}
        <SE.Card theme={theme} style={{marginBottom:12,padding:0,overflow:'hidden'}}>
          <SE.ConfigRow theme={theme} n="i" label="Framework" value={fw?.name} sub={fw?`${fw.type} · ${fw.lang}`:'Choose a backend to benchmark against'} onClick={()=>setState({...state,picker:'fw'})}/>
          <div style={{height:1,background:theme.border}}/>
          <SE.ConfigRow theme={theme} n="ii" label="Circuit" value={circ?.name} sub={circ?circ.family:'Pick what to prove'} disabled={!state.fw} onClick={()=>state.fw && setState({...state,picker:'circuit'})}/>
          <div style={{height:1,background:theme.border}}/>
          <SE.ConfigRow theme={theme} n="iii" label="Input" value={state.input} sub={state.input?'Vector ready':'Provide a field element'} disabled={!state.circuit} onClick={()=>state.circuit && setState({...state,picker:'input'})}/>
        </SE.Card>

        {/* Compare nudge */}
        <div onClick={()=>onNav('compare')} style={{display:'flex',alignItems:'center',gap:14,padding:16,borderRadius:20,background:theme.surface2,cursor:'pointer',border:`1px dashed ${theme.border}`,marginBottom:16}}>
          <div style={{width:44,height:44,borderRadius:'50%',background:theme.chrome,color:theme.onChrome,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="compare" size={20}/></div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'"Instrument Serif",serif',fontSize:20,lineHeight:1,letterSpacing:-0.3}}>Run all, compare.</div>
            <div style={{fontSize:13,color:theme.textDim,marginTop:3}}>Same circuit across every framework.</div>
          </div>
          <Icon name="chevronRight" size={18} color={theme.textDim}/>
        </div>

        {/* Recent */}
        <div style={{marginBottom:8,display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,fontStyle:'italic',letterSpacing:-0.3}}>Recent runs</div>
          <button onClick={()=>onNav('history')} style={{background:'none',border:'none',color:theme.textDim,fontSize:12,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>See all →</button>
        </div>
        {DATA.HISTORY.slice(0,3).map(r=>(
          <div key={r.id} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:`1px solid ${theme.border}`}}>
            <div style={{width:34,height:34,borderRadius:10,background:theme.surface,border:`1px solid ${theme.border}`,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="zap" size={14}/></div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontFamily:'Inter,sans-serif',fontSize:14,fontWeight:500}}>{r.circuit} · {DATA.FRAMEWORKS.find(f=>f.id===r.fw)?.name}</div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:12,color:theme.textDim}}>{r.date}</div>
            </div>
            <div style={{fontFamily:'"Instrument Serif",serif',fontSize:18}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{padding:'12px 20px 16px',background:theme.bg}}>
        <button disabled={!canRun} onClick={onRun} style={{
          width:'100%',padding:'18px',borderRadius:99,border:'none',cursor:canRun?'pointer':'not-allowed',
          background:canRun?theme.chrome:theme.surface2,color:canRun?theme.onChrome:theme.textMuted,
          fontFamily:'Inter,sans-serif',fontSize:16,fontWeight:500,
          display:'flex',alignItems:'center',justifyContent:'center',gap:10,
        }}><Icon name="play" size={14}/> Run benchmark</button>
      </div>
    </div>
  );
};

SE.ConfigRow = ({theme,n,label,value,sub,onClick,disabled}) => (
  <div onClick={disabled?null:onClick} style={{padding:16,display:'flex',alignItems:'center',gap:14,cursor:disabled?'default':'pointer',opacity:disabled?0.45:1}}>
    <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:22,color:theme.textDim,width:26}}>{n}.</div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontFamily:'Inter,sans-serif',fontSize:11,color:theme.textDim,letterSpacing:0.5,textTransform:'uppercase'}}>{label}</div>
      <div style={{fontFamily:'"Instrument Serif",serif',fontSize:24,letterSpacing:-0.4,marginTop:2,color:value?theme.text:theme.textMuted}}>
        {value || 'choose…'}
      </div>
      <div style={{fontSize:12,color:theme.textDim,marginTop:2}}>{sub}</div>
    </div>
    <Icon name="chevronRight" size={18} color={theme.textDim}/>
  </div>
);

SE.Picker = ({theme,state,setState}) => {
  if(!state.picker) return null;
  const type=state.picker;
  const items=type==='fw'?DATA.FRAMEWORKS:type==='circuit'?DATA.CIRCUITS:DATA.INPUTS.map(i=>({id:i,name:i,family:'Vector'}));
  const key=type==='fw'?'fw':type==='circuit'?'circuit':'input';
  const title=type==='fw'?'Framework':type==='circuit'?'Circuit':'Input';
  return (
    <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.4)',zIndex:10,display:'flex',alignItems:'flex-end'}} onClick={()=>setState({...state,picker:null})}>
      <div onClick={e=>e.stopPropagation()} style={{width:'100%',background:theme.bg,borderTopLeftRadius:32,borderTopRightRadius:32,maxHeight:'78%',display:'flex',flexDirection:'column',border:`1px solid ${theme.border}`}}>
        <div style={{display:'flex',justifyContent:'center',paddingTop:10}}><div style={{width:40,height:4,borderRadius:2,background:theme.border}}/></div>
        <div style={{padding:'14px 24px 6px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:26,letterSpacing:-0.4,fontStyle:'italic'}}>{title}</div>
          <button onClick={()=>setState({...state,picker:null})} style={{background:theme.surface,border:`1px solid ${theme.border}`,width:32,height:32,borderRadius:'50%',color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="close" size={16}/></button>
        </div>
        <div style={{overflowY:'auto',padding:'4px 16px 16px'}}>
          {items.map(it=>{
            const active=state[key]===it.id;
            return (
              <div key={it.id} onClick={()=>setState({...state,[key]:it.id,picker:null})} style={{display:'flex',alignItems:'center',gap:14,padding:14,borderRadius:16,cursor:'pointer',background:active?theme.surface2:'transparent',marginBottom:4}}>
                <div style={{width:36,height:36,borderRadius:12,background:theme.surface,border:`1px solid ${theme.border}`,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name={it.icon||'code'} size={16}/></div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:'Inter,sans-serif',fontSize:15,fontWeight:500}}>{it.name}</div>
                  <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:12,color:theme.textDim}}>
                    {it.type?`${it.type} · ${it.lang}`:(it.family||'')}
                  </div>
                </div>
                {active && <Icon name="check" size={18} color={theme.accent}/>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ── Running ────────────────────────────────────────────────
SE.Running = ({theme, state, progress}) => {
  const p = Math.round(progress*100);
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text,padding:'24px 24px 28px'}}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:28}}>
        {/* Moon animation */}
        <div style={{position:'relative',width:220,height:220}}>
          <svg viewBox="0 0 220 220" width="220" height="220">
            <circle cx="110" cy="110" r="100" fill="none" stroke={theme.border} strokeWidth="1"/>
            <circle cx="110" cy="110" r="70"  fill="none" stroke={theme.border} strokeWidth="1"/>
            {/* Arc */}
            <circle cx="110" cy="110" r="100" fill="none" stroke={theme.accent} strokeWidth="2"
              strokeDasharray={`${628*progress} 628`} transform="rotate(-90 110 110)" strokeLinecap="round"/>
            {/* Moon */}
            <circle cx="110" cy="110" r="54" fill={theme.surface} stroke={theme.border}/>
            <circle cx="94" cy="100" r="6" fill={theme.border}/>
            <circle cx="118" cy="118" r="9" fill={theme.border}/>
            <circle cx="108" cy="128" r="3" fill={theme.border}/>
          </svg>
          {/* Orbiting dot */}
          <div style={{
            position:'absolute',width:14,height:14,borderRadius:'50%',background:theme.accent,
            left:'50%',top:'50%',
            transform:`rotate(${progress*360 - 90}deg) translateX(100px) translate(-50%,-50%)`,
            transformOrigin:'0 0',
          }}/>
        </div>

        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:16,color:theme.textDim}}>Generating proof…</div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:72,letterSpacing:-3,lineHeight:1,marginTop:4}}>
            {p}<span style={{fontSize:28,color:theme.textDim}}>%</span>
          </div>
        </div>

        <SE.Card theme={theme} style={{width:'100%'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
            <div>
              <div style={{fontSize:11,color:theme.textDim,letterSpacing:0.5,textTransform:'uppercase'}}>Framework</div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3}}>{DATA.FRAMEWORKS.find(f=>f.id===state.fw)?.name||'—'}</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:11,color:theme.textDim,letterSpacing:0.5,textTransform:'uppercase'}}>Circuit</div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3,fontStyle:'italic'}}>{DATA.CIRCUITS.find(c=>c.id===state.circuit)?.name||'—'}</div>
            </div>
          </div>
          <div style={{display:'flex',gap:10,justifyContent:'space-between',fontFamily:'Inter,sans-serif',fontSize:12,color:theme.textDim}}>
            <span>Elapsed {(progress*179).toFixed(0)}ms</span>
            <span>RAM {(progress*4.04).toFixed(2)}MB</span>
            <span>CPU {(60+progress*38).toFixed(0)}%</span>
          </div>
        </SE.Card>
      </div>
    </div>
  );
};

// ── Results ────────────────────────────────────────────────
SE.Results = ({theme, state, onBack, onNav}) => {
  const fw=DATA.FRAMEWORKS.find(f=>f.id===state.fw);
  const circ=DATA.CIRCUITS.find(c=>c.id===state.circuit);
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
      <SE.Bar theme={theme} title="Results" onBack={onBack} right={
        <button style={{background:theme.surface,border:`1px solid ${theme.border}`,width:36,height:36,borderRadius:'50%',color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="share" size={16}/></button>
      }/>
      <div style={{flex:1,overflow:'auto',padding:'4px 20px 24px'}}>
        {/* Headline */}
        <div style={{padding:'12px 0 20px'}}>
          <SE.Pill theme={theme} color={theme.success}><Icon name="check" size={10}/> Verified · 10:17</SE.Pill>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:60,letterSpacing:-2,lineHeight:0.95,marginTop:16}}>
            179<span style={{color:theme.textDim,fontStyle:'italic',fontSize:32,marginLeft:6}}>ms</span>
          </div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,color:theme.textDim,marginTop:4}}>
            {fw?.name} proved {circ?.name}
          </div>
        </div>

        {/* Split metrics */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:12}}>
          <SE.Card theme={theme}>
            <div style={{fontSize:11,letterSpacing:0.5,color:theme.textDim,textTransform:'uppercase'}}>Proof gen</div>
            <div style={{fontFamily:'"Instrument Serif",serif',fontSize:38,letterSpacing:-1,marginTop:4}}>163<span style={{fontSize:14,color:theme.textDim,marginLeft:2}}>ms</span></div>
          </SE.Card>
          <SE.Card theme={theme}>
            <div style={{fontSize:11,letterSpacing:0.5,color:theme.textDim,textTransform:'uppercase'}}>Verify</div>
            <div style={{fontFamily:'"Instrument Serif",serif',fontSize:38,letterSpacing:-1,marginTop:4}}>16<span style={{fontSize:14,color:theme.textDim,marginLeft:2}}>ms</span></div>
          </SE.Card>
        </div>

        {/* Metrics card */}
        <SE.Card theme={theme} style={{marginBottom:12}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,letterSpacing:-0.3,marginBottom:10}}>Detail</div>
          {[
            ['Proof size','3.59 KB'],
            ['Peak memory','4.04 MB'],
            ['Peak load','98.1%'],
            ['Battery Δ','0%'],
            ['Circuit size','1,024 gates'],
          ].map(([k,v])=>(
            <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:`1px dashed ${theme.border}`}}>
              <span style={{fontSize:13,color:theme.textDim}}>{k}</span>
              <span style={{fontFamily:'Inter,sans-serif',fontSize:14,fontWeight:500}}>{v}</span>
            </div>
          ))}
        </SE.Card>

        {/* Compare visual */}
        <SE.Card theme={theme} style={{marginBottom:16}}>
          <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,letterSpacing:-0.3,marginBottom:12}}>vs. the field</div>
          {[['Arkworks',179,true],['Rapidsnark',232],['Barretenberg',1790],['RISC Zero',6520]].map(([n,v,hi])=>(
            <div key={n} style={{marginBottom:10}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:4}}>
                <span style={{color:hi?theme.text:theme.textDim,fontWeight:hi?600:400}}>{n}</span>
                <span style={{fontFamily:'"Instrument Serif",serif',fontSize:14}}>{v<1000?`${v}ms`:`${(v/1000).toFixed(1)}s`}</span>
              </div>
              <div style={{height:6,background:theme.surface2,borderRadius:3,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${Math.min(100,(v/6520)*100)}%`,background:hi?theme.accent:theme.textDim,borderRadius:3}}/>
              </div>
            </div>
          ))}
        </SE.Card>

        <button onClick={()=>onNav('proof')} style={{
          width:'100%',padding:16,borderRadius:99,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,
          fontFamily:'Inter,sans-serif',fontSize:14,fontWeight:500,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8
        }}>View proof calldata <Icon name="chevronRight" size={16}/></button>
      </div>
    </div>
  );
};

// ── Proof ──────────────────────────────────────────────────
SE.Proof = ({theme, onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SE.Bar theme={theme} title="Proof calldata" onBack={onBack} right={
      <button style={{background:theme.surface,border:`1px solid ${theme.border}`,width:36,height:36,borderRadius:'50%',color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="copy" size={16}/></button>
    }/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:14}}>
        <SE.Card theme={theme}>
          <div style={{fontSize:10,color:theme.textDim,letterSpacing:0.5,textTransform:'uppercase'}}>Protocol</div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,marginTop:4,fontStyle:'italic'}}>groth16</div>
        </SE.Card>
        <SE.Card theme={theme}>
          <div style={{fontSize:10,color:theme.textDim,letterSpacing:0.5,textTransform:'uppercase'}}>Curve</div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,marginTop:4,fontStyle:'italic'}}>bn128</div>
        </SE.Card>
      </div>
      <SE.Card theme={theme} style={{padding:16}}>
        <pre style={{fontFamily:'"JetBrains Mono",monospace',fontSize:11,lineHeight:1.55,color:theme.text,margin:0,whiteSpace:'pre-wrap',wordBreak:'break-all'}}>{DATA.PROOF_SAMPLE}</pre>
      </SE.Card>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:14}}>
        <button style={{padding:14,borderRadius:99,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,fontFamily:'Inter,sans-serif',fontSize:14,cursor:'pointer'}}>Export JSON</button>
        <button style={{padding:14,borderRadius:99,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,fontFamily:'Inter,sans-serif',fontSize:14,cursor:'pointer'}}>Share</button>
      </div>
    </div>
  </div>
);

// ── History ────────────────────────────────────────────────
SE.History = ({theme, onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SE.Bar theme={theme} title="History" onBack={onBack} right={<SE.Pill theme={theme}>{DATA.HISTORY.length} runs</SE.Pill>}/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      {DATA.HISTORY.map(r=>(
        <SE.Card key={r.id} theme={theme} style={{marginBottom:10,padding:16,display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:42,height:42,borderRadius:14,background:theme.surface2,border:`1px solid ${theme.border}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Icon name={r.status==='ok'?'zap':'x'} size={18} color={r.status==='ok'?theme.text:theme.warn}/>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontFamily:'"Instrument Serif",serif',fontSize:20,letterSpacing:-0.3,lineHeight:1.1}}>{r.circuit}</div>
            <div style={{fontSize:12,color:theme.textDim,marginTop:2}}>{DATA.FRAMEWORKS.find(f=>f.id===r.fw)?.name} · {r.input} · {r.date}</div>
          </div>
          <div style={{textAlign:'right'}}>
            {r.status==='ok'?(
              <>
                <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
                <div style={{fontSize:10,color:theme.textDim}}>gen {r.gen} · ver {r.ver}</div>
              </>
            ):<SE.Pill theme={theme} color={theme.warn}>failed</SE.Pill>}
          </div>
        </SE.Card>
      ))}
    </div>
  </div>
);

// ── Compare ────────────────────────────────────────────────
SE.Compare = ({theme, onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SE.Bar theme={theme} title="Compare" onBack={onBack}/>
    <div style={{flex:1,overflow:'auto',padding:'0 20px 20px'}}>
      <div style={{padding:'4px 0 18px'}}>
        <SE.Pill theme={theme}>Poseidon2 · Input 1f</SE.Pill>
        <div style={{fontFamily:'"Instrument Serif",serif',fontSize:36,letterSpacing:-1,lineHeight:1.05,marginTop:10}}>
          <span style={{fontStyle:'italic',color:theme.textDim}}>the field,</span><br/>ranked.
        </div>
      </div>

      {DATA.COMPARE.map(r=>{
        const fw=DATA.FRAMEWORKS.find(f=>f.id===r.fw);
        const max=Math.max(...DATA.COMPARE.map(x=>x.total));
        const w=(r.total/max)*100;
        const winner=r.rank===1;
        return (
          <SE.Card key={r.fw} theme={theme} style={{marginBottom:10,padding:16,borderColor:winner?theme.accent:theme.border,borderWidth:winner?2:1}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:22,color:winner?theme.accent:theme.textDim}}>{r.rank}.</div>
                <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3}}>{fw?.name}</div>
                {winner && <SE.Pill theme={theme} color={theme.accent} filled>Fastest</SE.Pill>}
              </div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontSize:22,letterSpacing:-0.3}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
            </div>
            <div style={{height:6,background:theme.surface2,borderRadius:3,overflow:'hidden'}}>
              <div style={{height:'100%',width:`${w}%`,background:winner?theme.accent:theme.textDim,borderRadius:3}}/>
            </div>
            <div style={{display:'flex',gap:14,marginTop:10,fontSize:11,color:theme.textDim}}>
              <span>gen {r.gen}ms</span><span>ver {r.ver}ms</span><span>mem {r.mem}MB</span><span>proof {r.proof}KB</span>
            </div>
          </SE.Card>
        );
      })}
    </div>
  </div>
);

// ── Device ─────────────────────────────────────────────────
SE.Device = ({theme, onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SE.Bar theme={theme} title="Device" onBack={onBack}/>
    <div style={{flex:1,overflow:'auto',padding:'0 20px 20px'}}>
      <SE.Card theme={theme} style={{marginBottom:12,display:'flex',alignItems:'center',gap:14,padding:18}}>
        <div style={{width:54,height:54,borderRadius:18,background:theme.surface2,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="phone" size={24}/></div>
        <div>
          <div style={{fontFamily:'"Instrument Serif",serif',fontSize:28,letterSpacing:-0.5,lineHeight:1}}>SM-M315F</div>
          <div style={{fontSize:13,color:theme.textDim,marginTop:2,fontStyle:'italic',fontFamily:'"Instrument Serif",serif'}}>Samsung · Android 12</div>
        </div>
      </SE.Card>

      <SE.Card theme={theme} style={{marginBottom:12}}>
        <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,marginBottom:8}}>Hardware</div>
        {[['Chipset','Helio G80'],['Cores','8'],['RAM','5.44 GB'],['Storage','128 GB'],['OS','Android 12'],['Build','SP1A.210812.016']].map(([k,v])=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:`1px dashed ${theme.border}`}}>
            <span style={{fontSize:13,color:theme.textDim}}>{k}</span>
            <span style={{fontSize:14,fontWeight:500}}>{v}</span>
          </div>
        ))}
      </SE.Card>

      <SE.Card theme={theme} style={{marginBottom:12}}>
        <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:20,marginBottom:8}}>Preferences</div>
        {[['Default trials','1'],['Warm-up run','off'],['Submit results','ask'],['Theme','auto']].map(([k,v])=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:`1px dashed ${theme.border}`}}>
            <span style={{fontSize:14}}>{k}</span>
            <span style={{fontSize:13,color:theme.textDim,display:'flex',alignItems:'center',gap:4}}>{v} <Icon name="chevronRight" size={14}/></span>
          </div>
        ))}
      </SE.Card>
    </div>
  </div>
);

window.SE = SE;
