import { useEffect, useState } from 'react'

/* ── helpers ── */
const inp = (extra = {}) => ({
  style: {
    width: '100%', padding: '.72rem .9rem',
    background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
    borderRadius: '8px', color: '#fff', fontSize: '.9rem', outline: 'none',
    fontFamily: 'Inter,sans-serif', transition: 'border .2s', boxSizing: 'border-box',
    ...extra,
  },
  onFocus: e => { e.target.style.borderColor = 'rgba(229,9,20,.55)' },
  onBlur:  e => { e.target.style.borderColor = 'rgba(255,255,255,.1)' },
})

const Label = ({ children }) => (
  <label style={{ display:'block', fontSize:'.72rem', color:'rgba(255,255,255,.7)',
    fontFamily:"'JetBrains Mono',monospace", letterSpacing:'.08em',
    textTransform:'uppercase', marginBottom:'.35rem' }}>
    {children}
  </label>
)

const Field = ({ label, children }) => (
  <div style={{ marginBottom:'1.1rem' }}>
    <Label>{label}</Label>
    {children}
  </div>
)

const SubmitBtn = ({ label }) => (
  <button type="submit" style={{
    width:'100%', padding:'.9rem', marginTop:'.5rem',
    background:'linear-gradient(135deg,#E50914,#ff2d2d)',
    border:'none', borderRadius:'9px', color:'#fff', fontSize:'.95rem',
    fontWeight:700, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'.08em',
    cursor:'pointer', textTransform:'uppercase', boxShadow:'0 4px 20px rgba(229,9,20,.3)',
    transition:'all .2s',
  }}
  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(229,9,20,.45)' }}
  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 20px rgba(229,9,20,.3)' }}
  >
    {label}
  </button>
)

/* ── form bodies ── */
function AccountForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Phone / WhatsApp"><input type="tel" required placeholder="+1 234 567 8900" {...inp()} /></Field>
      <Field label="Password"><input type="password" required placeholder="Create a password" {...inp()} /></Field>
      <Field label="Account Type">
        <select required {...inp()}>
          <option value="">Select account type</option>
          <option>Standard</option>
          <option>ECN Raw</option>
          <option>Pro</option>
          <option>VIP</option>
          <option>Islamic (Swap-Free)</option>
        </select>
      </Field>
      <SubmitBtn label="Open Live Account →" />
    </form>
  )
}

function DemoForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Phone"><input type="tel" placeholder="+1 234 567 8900" {...inp()} /></Field>
      <Field label="Demo Balance">
        <select {...inp()}>
          <option>$10,000</option>
          <option>$25,000</option>
          <option>$50,000</option>
          <option>$100,000</option>
        </select>
      </Field>
      <SubmitBtn label="Start Free Demo →" />
    </form>
  )
}

function LoginForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Password"><input type="password" required placeholder="••••••••" {...inp()} /></Field>
      <div style={{ textAlign:'right', marginBottom:'1.2rem' }}>
        <span style={{ fontSize:'.78rem', color:'#E50914', cursor:'pointer' }}>Forgot password?</span>
      </div>
      <SubmitBtn label="Login to Portal →" />
      <p style={{ textAlign:'center', fontSize:'.78rem', color:'rgba(255,255,255,.45)', marginTop:'1rem' }}>
        No account?{' '}
        <span style={{ color:'#E50914', cursor:'pointer', textDecoration:'underline' }}>Register Free</span>
      </p>
    </form>
  )
}

function RegisterForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Phone / WhatsApp"><input type="tel" required placeholder="+1 234 567 8900" {...inp()} /></Field>
      <Field label="Country">
        <select required {...inp()}>
          <option value="">Select country</option>
          <option>India</option><option>UAE</option><option>Pakistan</option>
          <option>Japan</option><option>UK</option><option>USA</option><option>Other</option>
        </select>
      </Field>
      <Field label="Password"><input type="password" required placeholder="Create a password" {...inp()} /></Field>
      <SubmitBtn label="Register Free →" />
    </form>
  )
}

function ContactForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Subject">
        <select {...inp()}>
          <option value="">Select a topic</option>
          <option>Account Opening</option>
          <option>Deposits &amp; Withdrawals</option>
          <option>Technical Support</option>
          <option>Trading Conditions</option>
          <option>Verification / KYC</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Message">
        <textarea required placeholder="Describe your question..." rows={4} {...inp({ resize:'vertical', minHeight:'90px' })} />
      </Field>
      <SubmitBtn label="Send Message →" />
    </form>
  )
}

function IBForm({ onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Phone / WhatsApp"><input type="tel" required placeholder="+1 234 567 8900" {...inp()} /></Field>
      <Field label="Country">
        <select {...inp()}>
          <option>Select Country</option>
          <option>India</option><option>UAE</option><option>Pakistan</option>
          <option>Japan</option><option>UK</option><option>Other</option>
        </select>
      </Field>
      <Field label="Experience">
        <select {...inp()}>
          <option>Select Experience</option>
          <option>Beginner (&lt; 1 year)</option>
          <option>Intermediate (1–3 years)</option>
          <option>Expert (3+ years)</option>
        </select>
      </Field>
      <Field label="Expected Monthly Volume">
        <select {...inp()}>
          <option>Select Volume</option>
          <option>0–50 lots</option><option>50–200 lots</option><option>200+ lots</option>
        </select>
      </Field>
      <SubmitBtn label="Submit IB Application →" />
    </form>
  )
}

function PromoForm({ title, onDone }) {
  return (
    <form onSubmit={e=>{ e.preventDefault(); onDone() }}>
      <div style={{ background:'rgba(229,9,20,.08)', border:'1px solid rgba(229,9,20,.2)', borderRadius:'10px', padding:'1rem', marginBottom:'1.3rem' }}>
        <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.75)', lineHeight:1.6, margin:0 }}>
          Claim your <strong style={{ color:'#fff' }}>{title}</strong> by registering or logging into your account below.
        </p>
      </div>
      <Field label="Full Name"><input type="text" required placeholder="Your full name" {...inp()} /></Field>
      <Field label="Email Address"><input type="email" required placeholder="your@email.com" {...inp()} /></Field>
      <Field label="Account Number (if existing)"><input type="text" placeholder="e.g. HK-123456" {...inp()} /></Field>
      <SubmitBtn label="Claim Promotion →" />
      <p style={{ fontSize:'.7rem', color:'rgba(255,255,255,.35)', textAlign:'center', marginTop:'.8rem' }}>T&amp;Cs apply. Promotions subject to eligibility.</p>
    </form>
  )
}

/* ── config map ── */
const MODAL_CONFIG = {
  account:  { title:'Open Live Account', sub:'Start trading with a live account today', emoji:'🚀' },
  demo:     { title:'Try Free Demo', sub:'Practice with $10,000 virtual funds — zero risk', emoji:'▶' },
  login:    { title:'Login to Portal', sub:'Access your dashboard, positions & funds', emoji:'🔐' },
  register: { title:'Register Free', sub:'Create your Hokkai Markets account in 2 minutes', emoji:'📝' },
  contact:  { title:'Contact Support', sub:'Our team replies within 1 hour', emoji:'💬' },
  ib:       { title:'Become an IB Partner', sub:'Earn up to $7/lot on referred clients', emoji:'🤝' },
  promo:    { title:'Claim Promotion', sub:'Fill in your details to claim this offer', emoji:'🎁' },
}

export default function Modal({ isOpen, onClose, type = 'account', promoTitle = '' }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') handleClose() }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => { setDone(false); onClose() }
  const handleDone  = () => setDone(true)

  if (!isOpen) return null

  const cfg = MODAL_CONFIG[type] || MODAL_CONFIG.account

  return (
    <div
      className="modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) handleClose() }}
      style={{
        position:'fixed', inset:0,
        backgroundColor:'rgba(0,0,0,.75)',
        display:'flex', alignItems:'center', justifyContent:'center',
        zIndex:9999, padding:'1rem',
        animation:'fadeIn .25s ease-out',
      }}
    >
      <div
        className="modal-box"
        style={{
          background:'#05070a',
          border:'1px solid rgba(229,9,20,.28)',
          borderRadius:'18px',
          padding:'2rem 2rem 1.8rem',
          maxWidth:'460px', width:'100%',
          maxHeight:'92vh', overflowY:'auto',
          position:'relative',
          animation:'slideIn .28s ease-out',
          boxShadow:'0 24px 70px rgba(0,0,0,.9)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position:'absolute', top:'1rem', right:'1rem',
            background:'rgba(229,9,20,.18)', border:'1px solid rgba(229,9,20,.38)',
            borderRadius:'50%', width:'32px', height:'32px',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer', color:'#fff', fontSize:'20px', lineHeight:1,
            transition:'all .2s',
          }}
          onMouseEnter={e=>{ e.currentTarget.style.background='rgba(229,9,20,.4)'; e.currentTarget.style.transform='scale(1.1)' }}
          onMouseLeave={e=>{ e.currentTarget.style.background='rgba(229,9,20,.18)'; e.currentTarget.style.transform='' }}
        >×</button>

        {/* Header */}
        {done ? (
          <div style={{ textAlign:'center', padding:'2rem 0' }}>
            <div style={{ fontSize:'3.5rem', marginBottom:'1rem' }}>✅</div>
            <h3 style={{ color:'#fff', fontFamily:"'Michroma',sans-serif", fontSize:'1.3rem', marginBottom:'.5rem' }}>
              Submitted!
            </h3>
            <p style={{ color:'rgba(255,255,255,.6)', fontSize:'.88rem' }}>
              Our team will get back to you shortly.
            </p>
            <button
              onClick={handleClose}
              style={{ marginTop:'1.5rem', padding:'.7rem 2rem', background:'var(--red)', border:'none',
                borderRadius:'8px', color:'#fff', cursor:'pointer', fontWeight:700, fontSize:'.9rem' }}
            >Close</button>
          </div>
        ) : (
          <>
            <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
              <div style={{ fontSize:'2rem', marginBottom:'.4rem' }}>{cfg.emoji}</div>
              <h2 style={{ color:'#fff', fontFamily:"'Michroma',sans-serif", fontSize:'1.3rem',
                letterSpacing:'.06em', marginBottom:'.4rem' }}>{cfg.title}</h2>
              <p style={{ color:'rgba(255,255,255,.55)', fontSize:'.82rem' }}>{cfg.sub}</p>
              <div style={{ width:'40px', height:'2px', background:'#E50914', margin:'.8rem auto 0' }}></div>
            </div>

            {type === 'account'  && <AccountForm  onDone={handleDone} />}
            {type === 'demo'     && <DemoForm     onDone={handleDone} />}
            {type === 'login'    && <LoginForm    onDone={handleDone} />}
            {type === 'register' && <RegisterForm onDone={handleDone} />}
            {type === 'contact'  && <ContactForm  onDone={handleDone} />}
            {type === 'ib'       && <IBForm       onDone={handleDone} />}
            {type === 'promo'    && <PromoForm    title={promoTitle} onDone={handleDone} />}
          </>
        )}
      </div>
    </div>
  )
}
