<script>
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the selected values
    const casteValue = parseInt(document.getElementById('Caste').value);
    const salaryValue = parseInt(document.getElementById('SALARY').value);
    const lookingValue = parseInt(document.getElementById('Looking').value);
    const groomValue = parseInt(document.getElementById('Groom').value);
    const brideValue = parseInt(document.getElementById('Bride').value);
    const groom2Value = parseInt(document.getElementById('Groom2').value);
    const heightValue = parseInt(document.getElementById('Height').value);

    // Calculate the sum
    const sum = casteValue + salaryValue + lookingValue + groomValue + brideValue + groom2Value + heightValue;

    // Display the output on the website
    const outputElement = document.getElementById('output');
    if (sum < 3000000) {
      outputElement.textContent = sum + '! You have to Game Up, blud, Running around doing nothing gonna take you nowhere fr!';
    } else {
      outputElement.textContent = sum +'! Keep your standards high like your salary, You worked till you dick turned soft, alright it does not matter until you keep them stacks coming, get  a hot bitch to spend those stacks';
    }
  });
</script>