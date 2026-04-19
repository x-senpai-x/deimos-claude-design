// screens-neomaterial.jsx — "Neo-Material" direction: modern, soft, rounded, consumer-friendly
// Think Material You / Google's Android apps. Bold accent, soft cards, generous radii.

const SN = {};

SN.Card = ({theme,children,style}) => (
  <div style={{background:theme.surface,borderRadius:24,padding:20,border:`1px solid ${theme.border}`,...style}}>{children}</div>
);

SN.Bar = ({theme,title,onBack,right,subtitle}) => (
  <div style={{padding:'18px 20px',display:'flex',alignItems:'center',gap:14,background:theme.bg}}>
    {onBack && <button onClick={onBack} style={{width:40,height:40,borderRadius:14,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="back" size={20}/></button>}
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:22,fontWeight:600,letterSpacing:-0.5,lineHeight:1.1}}>{title}</div>
      {subtitle && <div style={{fontSize:12,color:theme.textDim,marginTop:2}}>{subtitle}</div>}
    </div>
    {right}
  </div>
);

SN.Chip = ({theme,children,active,icon,onClick}) => (
  <button onClick={onClick} style={{
    display:'inline-flex',alignItems:'center',gap:6,padding:'8px 14px',borderRadius:99,
    background:active?theme.chip:theme.surface,color:active?theme.onChip:theme.text,
    border:`1px solid ${active?theme.chip:theme.border}`,
    fontFamily:'Inter,sans-serif',fontSize:13,fontWeight:500,cursor:'pointer',
  }}>{icon && <Icon name={icon} size={14}/>}{children}</button>
);

// ── Onboarding ──────────────────────────────────────────────
SN.Onboarding = ({theme,onDone}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text,padding:'32px 24px 24px'}}>
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
      {/* Hero mark */}
      <div style={{alignSelf:'flex-start',width:96,height:96,borderRadius:28,background:`linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:`0 20px 40px -10px ${theme.accent}44`}}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" fill="white" fillOpacity="0.95"/>
          <circle cx="19" cy="20" r="2" fill={theme.accent} fillOpacity="0.3"/>
          <circle cx="28" cy="26" r="3" fill={theme.accent} fillOpacity="0.3"/>
          <circle cx="23" cy="30" r="1.2" fill={theme.accent} fillOpacity="0.3"/>
        </svg>
      </div>

      <div>
        <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:44,fontWeight:700,letterSpacing:-1.5,lineHeight:1}}>Deimos</div>
        <div style={{fontSize:18,color:theme.textDim,marginTop:6}}>Benchmark zero-knowledge proofs on your phone.</div>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {[
          ['zap','Prove fast','Measure how long it takes to generate real ZK proofs.'],
          ['compare','Compare frameworks','Arkworks · Noir · RISC Zero · and more.'],
          ['trophy','Contribute','Send anonymized results to the public leaderboard.'],
        ].map(([i,t,d])=>(
          <div key={t} style={{display:'flex',alignItems:'flex-start',gap:12,padding:'12px 14px',borderRadius:18,background:theme.surface,border:`1px solid ${theme.border}`}}>
            <div style={{width:36,height:36,borderRadius:12,background:theme.accent+'22',color:theme.accent,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon name={i} size={18}/></div>
            <div><div style={{fontSize:14,fontWeight:600}}>{t}</div><div style={{fontSize:12,color:theme.textDim,marginTop:1}}>{d}</div></div>
          </div>
        ))}
      </div>
    </div>

    <button onClick={onDone} style={{
      padding:'18px',borderRadius:20,background:theme.accent,color:'#fff',border:'none',
      fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600,cursor:'pointer',
      display:'flex',alignItems:'center',justifyContent:'center',gap:8,
      boxShadow:`0 12px 30px -8px ${theme.accent}66`,
    }}>Get started <Icon name="forward" size={18}/></button>
  </div>
);

// ── Home ───────────────────────────────────────────────────
SN.Home = ({theme,state,setState,onRun,onNav}) => {
  const fw=DATA.FRAMEWORKS.find(f=>f.id===state.fw);
  const circ=DATA.CIRCUITS.find(c=>c.id===state.circuit);
  const canRun=state.fw && state.circuit && state.input;
  const filled=[fw,circ,state.input].filter(Boolean).length;

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
      {/* Header */}
      <div style={{padding:'18px 20px 4px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:36,height:36,borderRadius:12,background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:14,height:14,borderRadius:'50%',background:'#fff',opacity:0.9}}/>
          </div>
          <div>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:18,fontWeight:700,letterSpacing:-0.3,lineHeight:1}}>Deimos</div>
            <div style={{fontSize:11,color:theme.textDim,marginTop:1}}>ZK benchmarks</div>
          </div>
        </div>
        <div style={{display:'flex',gap:6}}>
          <button onClick={()=>onNav('history')} style={{width:40,height:40,borderRadius:14,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="history" size={18}/></button>
          <button onClick={()=>onNav('device')} style={{width:40,height:40,borderRadius:14,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="settings" size={18}/></button>
        </div>
      </div>

      <div style={{flex:1,overflow:'auto',padding:'8px 20px 16px'}}>
        {/* Hero */}
        <div style={{padding:'14px 0 16px'}}>
          <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:30,fontWeight:700,letterSpacing:-1,lineHeight:1.05}}>Configure a run.</div>
          <div style={{fontSize:14,color:theme.textDim,marginTop:4}}>Step {filled}/3 · Pick framework, circuit, and input.</div>
          <div style={{height:6,background:theme.surface2,borderRadius:3,marginTop:12,overflow:'hidden'}}>
            <div style={{width:`${(filled/3)*100}%`,height:'100%',background:`linear-gradient(90deg,${theme.accent},${theme.accent2})`,borderRadius:3,transition:'width .3s'}}/>
          </div>
        </div>

        {/* Config cards */}
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:14}}>
          <SN.ConfigCard theme={theme} step="1" icon="shield" label="Framework" value={fw?.name} sub={fw?`${fw.type} · ${fw.lang}`:'Select a backend'} done={!!fw} onClick={()=>setState({...state,picker:'fw'})}/>
          <SN.ConfigCard theme={theme} step="2" icon="layers" label="Circuit" value={circ?.name} sub={circ?circ.family:'What should we prove?'} done={!!circ} disabled={!fw} onClick={()=>fw && setState({...state,picker:'circuit'})}/>
          <SN.ConfigCard theme={theme} step="3" icon="code" label="Input" value={state.input} sub={state.input?'Field vector':'Provide input'} done={!!state.input} disabled={!circ} onClick={()=>circ && setState({...state,picker:'input'})}/>
        </div>

        {/* Run all banner */}
        <div onClick={()=>onNav('compare')} style={{padding:16,borderRadius:20,background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,color:'#fff',display:'flex',alignItems:'center',gap:12,cursor:'pointer',marginBottom:14,boxShadow:`0 16px 32px -12px ${theme.accent}55`}}>
          <div style={{width:40,height:40,borderRadius:14,background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="compare" size={20}/></div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600}}>Run all & compare</div>
            <div style={{fontSize:12,opacity:0.85,marginTop:1}}>Benchmark every framework at once</div>
          </div>
          <Icon name="chevronRight" size={20}/>
        </div>

        {/* Recent */}
        <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600,marginBottom:8}}>Recent</div>
        <SN.Card theme={theme} style={{padding:6}}>
          {DATA.HISTORY.slice(0,3).map((r,i,a)=>(
            <div key={r.id} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderBottom:i<a.length-1?`1px solid ${theme.border}`:'none'}}>
              <div style={{width:36,height:36,borderRadius:12,background:theme.accent+'18',color:theme.accent,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="zap" size={16}/></div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:600}}>{r.circuit}</div>
                <div style={{fontSize:11,color:theme.textDim}}>{DATA.FRAMEWORKS.find(f=>f.id===r.fw)?.name} · {r.date}</div>
              </div>
              <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:15,fontWeight:600}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
            </div>
          ))}
        </SN.Card>
      </div>

      {/* CTA */}
      <div style={{padding:'10px 20px 16px',background:theme.bg}}>
        <button disabled={!canRun} onClick={onRun} style={{
          width:'100%',padding:'18px',borderRadius:20,border:'none',cursor:canRun?'pointer':'not-allowed',
          background:canRun?theme.accent:theme.surface2,color:canRun?'#fff':theme.textMuted,
          fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600,
          display:'flex',alignItems:'center',justifyContent:'center',gap:10,
          boxShadow: canRun?`0 12px 24px -8px ${theme.accent}66`:'none',
        }}><Icon name="play" size={16}/> Run benchmark</button>
      </div>
    </div>
  );
};

SN.ConfigCard = ({theme,step,icon,label,value,sub,done,disabled,onClick}) => (
  <div onClick={disabled?null:onClick} style={{
    padding:16,borderRadius:20,background:theme.surface,
    border:`1.5px solid ${done?theme.accent:theme.border}`,
    display:'flex',alignItems:'center',gap:14,cursor:disabled?'default':'pointer',opacity:disabled?0.45:1
  }}>
    <div style={{width:44,height:44,borderRadius:14,background:done?theme.accent:theme.surface2,color:done?'#fff':theme.text,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
      {done ? <Icon name="check" size={20}/> : <Icon name={icon} size={18}/>}
    </div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:11,color:theme.textDim,letterSpacing:0.4,textTransform:'uppercase',fontWeight:500}}>Step {step} · {label}</div>
      <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:18,fontWeight:600,marginTop:2,color:value?theme.text:theme.textMuted,lineHeight:1.2}}>
        {value || 'Not selected'}
      </div>
      <div style={{fontSize:12,color:theme.textDim,marginTop:1}}>{sub}</div>
    </div>
    <Icon name="chevronRight" size={18} color={theme.textDim}/>
  </div>
);

SN.Picker = ({theme,state,setState}) => {
  if(!state.picker) return null;
  const type=state.picker;
  const items=type==='fw'?DATA.FRAMEWORKS:type==='circuit'?DATA.CIRCUITS:DATA.INPUTS.map(i=>({id:i,name:i,family:'Field vector',icon:'code'}));
  const key=type==='fw'?'fw':type==='circuit'?'circuit':'input';
  const title=type==='fw'?'Select framework':type==='circuit'?'Select circuit':'Select input';
  return (
    <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.45)',zIndex:10,display:'flex',alignItems:'flex-end'}} onClick={()=>setState({...state,picker:null})}>
      <div onClick={e=>e.stopPropagation()} style={{width:'100%',background:theme.bg,borderTopLeftRadius:32,borderTopRightRadius:32,maxHeight:'80%',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'center',paddingTop:10}}><div style={{width:44,height:4,borderRadius:2,background:theme.border}}/></div>
        <div style={{padding:'14px 24px 10px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:22,fontWeight:700,letterSpacing:-0.5}}>{title}</div>
          <button onClick={()=>setState({...state,picker:null})} style={{width:36,height:36,borderRadius:12,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="close" size={18}/></button>
        </div>
        <div style={{overflowY:'auto',padding:'4px 16px 16px'}}>
          {items.map(it=>{
            const active=state[key]===it.id;
            return (
              <div key={it.id} onClick={()=>setState({...state,[key]:it.id,picker:null})} style={{
                display:'flex',alignItems:'center',gap:14,padding:'14px 14px',borderRadius:16,cursor:'pointer',
                background:active?theme.accent+'15':'transparent',
                border:`1.5px solid ${active?theme.accent:'transparent'}`,marginBottom:4
              }}>
                <div style={{width:40,height:40,borderRadius:12,background:active?theme.accent:theme.surface2,color:active?'#fff':theme.text,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name={it.icon||'code'} size={18}/></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:15,fontWeight:600,fontFamily:'"Space Grotesk",sans-serif'}}>{it.name}</div>
                  <div style={{fontSize:12,color:theme.textDim}}>{it.type?`${it.type} · ${it.lang}`:(it.family||'')}</div>
                </div>
                {active && <div style={{width:22,height:22,borderRadius:'50%',background:theme.accent,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="check" size={14}/></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ── Running ────────────────────────────────────────────────
SN.Running = ({theme,state,progress}) => {
  const p=Math.round(progress*100);
  const steps=[['Init',0.1],['Compile',0.3],['Witness',0.55],['Prove',0.85],['Verify',1.0]];
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text,padding:'24px 20px 24px'}}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:28}}>
        {/* Ring */}
        <div style={{position:'relative',alignSelf:'center',width:220,height:220}}>
          <svg viewBox="0 0 220 220" width="220" height="220">
            <defs>
              <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={theme.accent}/>
                <stop offset="1" stopColor={theme.accent2}/>
              </linearGradient>
            </defs>
            <circle cx="110" cy="110" r="96" fill="none" stroke={theme.surface2} strokeWidth="14"/>
            <circle cx="110" cy="110" r="96" fill="none" stroke="url(#rg)" strokeWidth="14" strokeLinecap="round"
              strokeDasharray={`${603*progress} 603`} transform="rotate(-90 110 110)"/>
          </svg>
          <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:64,fontWeight:700,letterSpacing:-3,lineHeight:1}}>{p}<span style={{fontSize:22,color:theme.textDim}}>%</span></div>
            <div style={{fontSize:12,color:theme.textDim,marginTop:4,textTransform:'uppercase',letterSpacing:1.5}}>Generating proof</div>
          </div>
        </div>

        <SN.Card theme={theme}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14}}>
            <div>
              <div style={{fontSize:11,color:theme.textDim,textTransform:'uppercase',letterSpacing:0.5}}>Running</div>
              <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:20,fontWeight:600,letterSpacing:-0.3,marginTop:2}}>{DATA.FRAMEWORKS.find(f=>f.id===state.fw)?.name} · {DATA.CIRCUITS.find(c=>c.id===state.circuit)?.name}</div>
            </div>
            <SN.Chip theme={theme} active>{(progress*179).toFixed(0)}ms</SN.Chip>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {steps.map(([n,at])=>{
              const st = progress>=at?'done':progress>=at-0.2?'active':'pending';
              return (
                <div key={n} style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{width:22,height:22,borderRadius:'50%',background:st==='done'?theme.success:(st==='active'?theme.accent:theme.surface2),color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {st==='done' ? <Icon name="check" size={12}/> : st==='active' ? <div style={{width:8,height:8,borderRadius:'50%',background:'#fff'}}/> : <div style={{width:6,height:6,borderRadius:'50%',background:theme.textMuted}}/>}
                  </div>
                  <div style={{flex:1,fontSize:13,color:st==='pending'?theme.textMuted:theme.text,fontWeight:st==='active'?600:400}}>{n}</div>
                  <div style={{fontSize:11,color:theme.textDim}}>{st==='done'?'done':st==='active'?'…':'—'}</div>
                </div>
              );
            })}
          </div>
        </SN.Card>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
          {[['RAM',`${(progress*4.04).toFixed(1)}MB`],['CPU',`${(60+progress*38).toFixed(0)}%`],['Batt','45%']].map(([k,v])=>(
            <div key={k} style={{padding:'12px',borderRadius:16,background:theme.surface,border:`1px solid ${theme.border}`,textAlign:'center'}}>
              <div style={{fontSize:10,color:theme.textDim,textTransform:'uppercase',letterSpacing:0.5}}>{k}</div>
              <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600,marginTop:2}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Results ────────────────────────────────────────────────
SN.Results = ({theme,state,onBack,onNav}) => {
  const fw=DATA.FRAMEWORKS.find(f=>f.id===state.fw);
  const circ=DATA.CIRCUITS.find(c=>c.id===state.circuit);
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
      <SN.Bar theme={theme} title="Results" subtitle={`${fw?.name} · ${circ?.name}`} onBack={onBack} right={
        <button style={{width:40,height:40,borderRadius:14,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="share" size={18}/></button>
      }/>
      <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
        {/* Hero card */}
        <div style={{padding:24,borderRadius:28,background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,color:'#fff',marginBottom:12,boxShadow:`0 20px 40px -12px ${theme.accent}55`}}>
          <div style={{display:'flex',alignItems:'center',gap:6,opacity:0.9}}>
            <Icon name="checkCircle" size={14}/>
            <span style={{fontSize:12,fontWeight:500,textTransform:'uppercase',letterSpacing:0.5}}>Verified · 10:17</span>
          </div>
          <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:64,fontWeight:700,letterSpacing:-2.5,lineHeight:1,marginTop:10}}>
            179<span style={{fontSize:24,opacity:0.85,marginLeft:6}}>ms</span>
          </div>
          <div style={{fontSize:14,opacity:0.85,marginTop:4}}>Total time · proof + verify</div>
        </div>

        {/* Split */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:12}}>
          <SN.Card theme={theme} style={{padding:16}}>
            <div style={{display:'flex',alignItems:'center',gap:6,color:theme.textDim}}><Icon name="zap" size={14}/><span style={{fontSize:11,textTransform:'uppercase',letterSpacing:0.5,fontWeight:500}}>Proof</span></div>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:30,fontWeight:700,letterSpacing:-1,marginTop:6}}>163<span style={{fontSize:13,color:theme.textDim,marginLeft:2}}>ms</span></div>
          </SN.Card>
          <SN.Card theme={theme} style={{padding:16}}>
            <div style={{display:'flex',alignItems:'center',gap:6,color:theme.textDim}}><Icon name="shield" size={14}/><span style={{fontSize:11,textTransform:'uppercase',letterSpacing:0.5,fontWeight:500}}>Verify</span></div>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:30,fontWeight:700,letterSpacing:-1,marginTop:6}}>16<span style={{fontSize:13,color:theme.textDim,marginLeft:2}}>ms</span></div>
          </SN.Card>
        </div>

        {/* Metric chips */}
        <SN.Card theme={theme} style={{marginBottom:12}}>
          <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:15,fontWeight:600,marginBottom:10}}>Metrics</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            {[
              ['memory','Proof size','3.59 KB'],
              ['cpu','Peak RAM','4.04 MB'],
              ['trend','Peak load','98.1%'],
              ['battery','Battery Δ','0%'],
            ].map(([i,k,v])=>(
              <div key={k} style={{padding:'10px 12px',borderRadius:14,background:theme.surface2,display:'flex',alignItems:'center',gap:10}}>
                <Icon name={i} size={16} color={theme.accent}/>
                <div><div style={{fontSize:11,color:theme.textDim}}>{k}</div><div style={{fontSize:14,fontWeight:600,fontFamily:'"Space Grotesk",sans-serif'}}>{v}</div></div>
              </div>
            ))}
          </div>
        </SN.Card>

        {/* Compare */}
        <SN.Card theme={theme} style={{marginBottom:14}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:15,fontWeight:600}}>vs. other frameworks</div>
            <button onClick={()=>onNav('compare')} style={{background:'none',border:'none',color:theme.accent,fontSize:12,fontWeight:600,cursor:'pointer'}}>All →</button>
          </div>
          {[['Arkworks',179,true],['Rapidsnark',232],['Barretenberg',1790],['RISC Zero',6520]].map(([n,v,hi])=>(
            <div key={n} style={{marginBottom:10}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:4}}>
                <span style={{color:hi?theme.text:theme.textDim,fontWeight:hi?600:400}}>{n}{hi && <span style={{color:theme.accent,marginLeft:6}}>• you</span>}</span>
                <span style={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:600}}>{v<1000?`${v}ms`:`${(v/1000).toFixed(1)}s`}</span>
              </div>
              <div style={{height:8,background:theme.surface2,borderRadius:4,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${Math.min(100,(v/6520)*100)}%`,background:hi?theme.accent:theme.textDim,borderRadius:4}}/>
              </div>
            </div>
          ))}
        </SN.Card>

        <button onClick={()=>onNav('proof')} style={{
          width:'100%',padding:16,borderRadius:18,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,
          fontFamily:'"Space Grotesk",sans-serif',fontSize:14,fontWeight:600,cursor:'pointer',
          display:'flex',alignItems:'center',justifyContent:'center',gap:8
        }}><Icon name="code" size={16}/> View proof calldata</button>
      </div>
    </div>
  );
};

// ── Proof ──────────────────────────────────────────────────
SN.Proof = ({theme,onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SN.Bar theme={theme} title="Proof data" subtitle="Calldata · Groth16" onBack={onBack} right={
      <button style={{width:40,height:40,borderRadius:14,background:theme.accent,color:'#fff',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="copy" size={18}/></button>
    }/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      <div style={{display:'flex',gap:8,marginBottom:12,flexWrap:'wrap'}}>
        <SN.Chip theme={theme} icon="shield">groth16</SN.Chip>
        <SN.Chip theme={theme} icon="globe">bn128</SN.Chip>
        <SN.Chip theme={theme} icon="hash">3.59 KB</SN.Chip>
      </div>
      <SN.Card theme={theme} style={{padding:0,overflow:'hidden'}}>
        <div style={{padding:'10px 14px',borderBottom:`1px solid ${theme.border}`,display:'flex',alignItems:'center',justifyContent:'space-between',background:theme.surface2}}>
          <div style={{fontSize:11,color:theme.textDim,fontFamily:'"JetBrains Mono",monospace'}}>proof.json</div>
          <div style={{fontSize:11,color:theme.textDim}}>42 lines</div>
        </div>
        <pre style={{margin:0,padding:14,fontFamily:'"JetBrains Mono",monospace',fontSize:11,lineHeight:1.55,whiteSpace:'pre-wrap',wordBreak:'break-all',color:theme.text}}>{DATA.PROOF_SAMPLE}</pre>
      </SN.Card>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:14}}>
        <button style={{padding:14,borderRadius:16,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,fontFamily:'"Space Grotesk",sans-serif',fontSize:14,fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}><Icon name="download" size={14}/>Export</button>
        <button style={{padding:14,borderRadius:16,background:theme.accent,border:'none',color:'#fff',fontFamily:'"Space Grotesk",sans-serif',fontSize:14,fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}><Icon name="share" size={14}/>Share</button>
      </div>
    </div>
  </div>
);

// ── History ────────────────────────────────────────────────
SN.History = ({theme,onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SN.Bar theme={theme} title="History" subtitle={`${DATA.HISTORY.length} runs`} onBack={onBack} right={
      <button style={{width:40,height:40,borderRadius:14,background:theme.surface,border:`1px solid ${theme.border}`,color:theme.text,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="filter" size={18}/></button>
    }/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      <div style={{display:'flex',gap:6,marginBottom:12,overflowX:'auto',paddingBottom:4}}>
        <SN.Chip theme={theme} active>All</SN.Chip>
        <SN.Chip theme={theme}>Arkworks</SN.Chip>
        <SN.Chip theme={theme}>Barretenberg</SN.Chip>
        <SN.Chip theme={theme}>Today</SN.Chip>
      </div>
      {DATA.HISTORY.map(r=>(
        <SN.Card key={r.id} theme={theme} style={{marginBottom:10,padding:14,display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:44,height:44,borderRadius:14,background:r.status==='ok'?theme.accent+'22':theme.warn+'22',color:r.status==='ok'?theme.accent:theme.warn,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Icon name={r.status==='ok'?'zap':'x'} size={18}/>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:15,fontWeight:600,lineHeight:1.2}}>{r.circuit}</div>
            <div style={{fontSize:11,color:theme.textDim,marginTop:2}}>{DATA.FRAMEWORKS.find(f=>f.id===r.fw)?.name} · {r.input} · {r.date}</div>
          </div>
          <div style={{textAlign:'right'}}>
            {r.status==='ok'?(
              <>
                <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:700}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
                <div style={{fontSize:10,color:theme.textDim}}>gen {r.gen} · ver {r.ver}</div>
              </>
            ):<span style={{fontSize:11,color:theme.warn,fontWeight:600}}>Failed</span>}
          </div>
        </SN.Card>
      ))}
    </div>
  </div>
);

// ── Compare ────────────────────────────────────────────────
SN.Compare = ({theme,onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SN.Bar theme={theme} title="Compare" subtitle="Poseidon2 · Input 1f" onBack={onBack}/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      {/* Hero stat */}
      <div style={{padding:20,borderRadius:24,background:theme.surface,border:`1px solid ${theme.border}`,marginBottom:14}}>
        <div style={{fontSize:12,color:theme.textDim,textTransform:'uppercase',letterSpacing:0.5,fontWeight:500}}>Winner</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:6}}>
          <div>
            <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:30,fontWeight:700,letterSpacing:-1}}>Arkworks</div>
            <div style={{fontSize:12,color:theme.textDim}}>Fastest of 5 frameworks</div>
          </div>
          <div style={{width:56,height:56,borderRadius:18,background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="trophy" size={24}/></div>
        </div>
        <div style={{marginTop:12,display:'flex',gap:12}}>
          <div><div style={{fontSize:11,color:theme.textDim}}>Total</div><div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:18,fontWeight:700}}>179ms</div></div>
          <div><div style={{fontSize:11,color:theme.textDim}}>Mem</div><div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:18,fontWeight:700}}>4.04MB</div></div>
          <div><div style={{fontSize:11,color:theme.textDim}}>Proof</div><div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:18,fontWeight:700}}>3.59KB</div></div>
        </div>
      </div>

      {DATA.COMPARE.map(r=>{
        const fw=DATA.FRAMEWORKS.find(f=>f.id===r.fw);
        const max=Math.max(...DATA.COMPARE.map(x=>x.total));
        const w=(r.total/max)*100;
        const winner=r.rank===1;
        return (
          <div key={r.fw} style={{marginBottom:10,padding:14,borderRadius:18,background:winner?theme.accent+'10':theme.surface,border:`1.5px solid ${winner?theme.accent:theme.border}`}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:28,height:28,borderRadius:10,background:winner?theme.accent:theme.surface2,color:winner?'#fff':theme.text,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'"Space Grotesk",sans-serif',fontSize:13,fontWeight:700}}>{r.rank}</div>
                <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:600}}>{fw?.name}</div>
              </div>
              <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:16,fontWeight:700}}>{r.total<1000?`${r.total}ms`:`${(r.total/1000).toFixed(2)}s`}</div>
            </div>
            <div style={{height:8,background:theme.surface2,borderRadius:4,overflow:'hidden'}}>
              <div style={{height:'100%',width:`${w}%`,background:winner?`linear-gradient(90deg,${theme.accent},${theme.accent2})`:theme.textDim,borderRadius:4}}/>
            </div>
            <div style={{display:'flex',gap:12,marginTop:8,fontSize:11,color:theme.textDim}}>
              <span>gen {r.gen}ms</span><span>ver {r.ver}ms</span><span>mem {r.mem}MB</span><span>proof {r.proof}KB</span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// ── Device ─────────────────────────────────────────────────
SN.Device = ({theme,onBack}) => (
  <div style={{height:'100%',display:'flex',flexDirection:'column',background:theme.bg,color:theme.text}}>
    <SN.Bar theme={theme} title="Device & settings" onBack={onBack}/>
    <div style={{flex:1,overflow:'auto',padding:'4px 20px 20px'}}>
      <SN.Card theme={theme} style={{marginBottom:12,padding:18,display:'flex',alignItems:'center',gap:14}}>
        <div style={{width:54,height:54,borderRadius:18,background:`linear-gradient(135deg,${theme.accent},${theme.accent2})`,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name="phone" size={24}/></div>
        <div style={{flex:1}}>
          <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:20,fontWeight:700,letterSpacing:-0.3}}>SM-M315F</div>
          <div style={{fontSize:12,color:theme.textDim}}>Samsung · Android 12 · 8-core</div>
        </div>
        <SN.Chip theme={theme} active>Target</SN.Chip>
      </SN.Card>

      <SN.Card theme={theme} style={{marginBottom:12}}>
        <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:14,fontWeight:600,marginBottom:10,color:theme.textDim,textTransform:'uppercase',letterSpacing:0.5}}>Hardware</div>
        {[['Chipset','Helio G80'],['Cores','8'],['RAM','5.44 GB'],['Storage','128 GB'],['OS','Android 12'],['Build','SP1A.210812.016']].map(([k,v],i,a)=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:i<a.length-1?`1px solid ${theme.border}`:'none'}}>
            <span style={{fontSize:14,color:theme.textDim}}>{k}</span>
            <span style={{fontSize:14,fontWeight:600}}>{v}</span>
          </div>
        ))}
      </SN.Card>

      <SN.Card theme={theme} style={{marginBottom:12}}>
        <div style={{fontFamily:'"Space Grotesk",sans-serif',fontSize:14,fontWeight:600,marginBottom:10,color:theme.textDim,textTransform:'uppercase',letterSpacing:0.5}}>Preferences</div>
        {[['Default trials','1','hash'],['Warm-up run','off','flame'],['Submit to leaderboard','ask','globe'],['Theme','auto','sun']].map(([k,v,i],idx,a)=>(
          <div key={k} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 0',borderBottom:idx<a.length-1?`1px solid ${theme.border}`:'none'}}>
            <div style={{width:34,height:34,borderRadius:11,background:theme.accent+'18',color:theme.accent,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name={i} size={16}/></div>
            <span style={{flex:1,fontSize:14,fontWeight:500}}>{k}</span>
            <span style={{fontSize:13,color:theme.textDim,display:'flex',alignItems:'center',gap:4}}>{v}<Icon name="chevronRight" size={14}/></span>
          </div>
        ))}
      </SN.Card>
    </div>
  </div>
);

window.SN = SN;
