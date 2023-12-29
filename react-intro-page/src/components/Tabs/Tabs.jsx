export default function Tabs({ children, buttons, ButtonsContainer="menu"}) {
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {/* tab content */}
      <div id="tab-content">
        {children}
      </div>
    </>
  );
}