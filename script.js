// Normalize strings by removing accents
function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Sample questions (add all 150 unique questions here)
const questions = [
    { question: "Je (avoir/être/aller/faire) content après l’école ?", answer: "suis" },
    { question: "Tu (avoir/être/aller/faire) au parc avec tes amis ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un gâteau dans la cuisine.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) dix ans cette année.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) une grande famille.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) fatigués après l’école ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) du sport le week-end.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) à la bibliothèque demain.", answer: "vais" },
    { question: "Elles (avoir/être/aller/faire) des crayons dans leurs sacs.", answer: "ont" },
    { question: "Elle (avoir/être/aller/faire) gentille avec ses amis ?", answer: "est" },
    { question: "Nous (avoir/être/aller/faire) à la plage cet été.", answer: "allons" },
    { question: "Vous (avoir/être/aller/faire) du vélo le matin ?", answer: "faites" },
    { question: "Ils (avoir/être/aller/faire) grands pour leur âge.", answer: "sont" },
    { question: "Je (avoir/être/aller/faire) un dessin pour mon père.", answer: "fais" },
    { question: "Tu (avoir/être/aller/faire) une sœur ou un frère ?", answer: "as" },
    { question: "Elle (avoir/être/aller/faire) à l’école en bus.", answer: "va" },
    { question: "Nous (avoir/être/aller/faire) froid en décembre.", answer: "avons" },
    { question: "Ils (avoir/être/aller/faire) leurs devoirs le soir.", answer: "font" },
    { question: "Vous (avoir/être/aller/faire) contents de vos cadeaux ?", answer: "êtes" },
    { question: "Je (avoir/être/aller/faire) au cinéma ce week-end.", answer: "vais" },
    { question: "Elle (avoir/être/aller/faire) jolie dans sa nouvelle robe.", answer: "est" },
    { question: "Tu (avoir/être/aller/faire) tes exercices tous les jours ?", answer: "fais" },
    { question: "Il (avoir/être/aller/faire) beaucoup d’amis à l’école.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) une fête ce soir.", answer: "faisons" },
    { question: "Vous (avoir/être/aller/faire) à la montagne en vacances ?", answer: "allez" },
    { question: "Ils (avoir/être/aller/faire) très gentils avec moi.", answer: "sont" },
    { question: "Je (avoir/être/aller/faire) ma chambre chaque jour.", answer: "fais" },
    { question: "Elles (avoir/être/aller/faire) des livres dans leurs mains.", answer: "ont" },
    { question: "Tu (avoir/être/aller/faire) à la piscine cet après-midi ?", answer: "vas" },
    { question: "Elle (avoir/être/aller/faire) un dessin pour sa classe.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) une promenade en forêt.", answer: "faisons" },
    { question: "Vous (avoir/être/aller/faire) des projets pour demain ?", answer: "avez" },
    { question: "Ils (avoir/être/aller/faire) au parc tous les jours.", answer: "vont" },
    { question: "Je (avoir/être/aller/faire) très fatigué après le sport.", answer: "suis" },
    { question: "Tu (avoir/être/aller/faire) ton lit le matin ?", answer: "fais" },
    { question: "Il (avoir/être/aller/faire) un sandwich pour le goûter.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) heureuse aujourd’hui.", answer: "est" },
    { question: "Nous (avoir/être/aller/faire) en ville ce week-end.", answer: "allons" },
    { question: "Vous (avoir/être/aller/faire) un jardin chez vous ?", answer: "avez" },
    { question: "Ils (avoir/être/aller/faire) du bruit dans le couloir.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un chat adorable.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) souvent chez ta grand-mère ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) une promenade tous les jours.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) beaucoup de jouets.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des amis à l’école.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très créatifs en classe.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) des pizzas délicieuses.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) chez mon cousin souvent.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) un bon élève en maths ?", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) ses devoirs après le dîner.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de chance aujourd’hui.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) toujours à l’heure en classe ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) un voyage chaque été.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) une nouvelle BD.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) vite quand tu cours ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un cadeau pour son ami.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) une imagination incroyable.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des idées pour le projet.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) gentils avec vos voisins ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) des jeux dans la cour.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) au zoo avec ma classe.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) mon meilleur ami.", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) un puzzle difficile.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de devoirs.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très forts en sport.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une sortie avec l’école.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un hamster comme animal.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) parfois en retard ?", answer: "es" },
    { question: "Il (avoir/être/aller/faire) une balade avec sa famille.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) beaucoup de talent.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des rêves pour l’avenir.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très drôles en classe.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) un match de basket.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) à la mer chaque été.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) prêt pour l’école ?", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) ses courses avec sa mère.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de photos.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très sages aujourd’hui.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une randonnée en montagne.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un oiseau dans ma maison.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) chez ton oncle souvent ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un film avec ses amis.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) une voix magnifique.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des projets pour l’été.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très patients avec nous.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une soirée chez eux.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) au parc cet après-midi.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) un élève génial.", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) un poème pour l’école.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup d’énergie.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) toujours gentils ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une visite au musée.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) une tortue comme animal.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) vite à l’école ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un dessin pour sa maîtresse.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) un grand sourire.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des souvenirs de vacances.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très calmes en classe.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) un spectacle à l’école.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) à la campagne souvent.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) un ami fidèle ?", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) un gâteau pour la fête.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de jouets.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très malins en cours.", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une course dans la cour.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un lapin dans mon jardin.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) au marché le samedi ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un cerf-volant dans le parc.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) beaucoup d’amies.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des rêves rigolos.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très curieux en classe ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une pièce de théâtre.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) au stade avec mon père.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) toujours joyeux ?", answer: "es" },
    { question: "Elle (avoir/être/aller/faire) un bouquet pour sa mère.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de livres.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très rapides en sport ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une cabane dans l’arbre.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un vélo tout neuf.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) au lac avec ta famille ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un avion en papier.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) un sac très lourd.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des amis dans le quartier.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très concentrés aujourd’hui ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) un picnic au parc.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) à l’aquarium demain.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) un grand frère ?", answer: "as" },
    { question: "Elle (avoir/être/aller/faire) un collier pour sa poupée.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de bonbons.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très gentils avec moi ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une chanson rigolote.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) un chien très joueur.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) au magasin avec ta mère ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un puzzle avec son frère.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) un rêve très étrange.", answer: "a" },
    { question: "Nous (avoir/être/aller/faire) des vacances géniales.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très polis avec les profs ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) un film à la maison.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) au restaurant ce soir.", answer: "vais" },
    { question: "Tu (avoir/être/aller/faire) un camarade sympa ?", answer: "as" },
    { question: "Elle (avoir/être/aller/faire) une peinture pour l’école.", answer: "fait" },
    { question: "Nous (avoir/être/aller/faire) beaucoup de chance ce mois-ci.", answer: "avons" },
    { question: "Vous (avoir/être/aller/faire) très courageux en sport ?", answer: "êtes" },
    { question: "Ils (avoir/être/aller/faire) une danse pour la fête.", answer: "font" },
    { question: "Je (avoir/être/aller/faire) une montre très belle.", answer: "ai" },
    { question: "Tu (avoir/être/aller/faire) à la ferme parfois ?", answer: "vas" },
    { question: "Il (avoir/être/aller/faire) un château avec du sable.", answer: "fait" },
    { question: "Elle (avoir/être/aller/faire) un cahier tout neuf.", answer: "a" },
  ];

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let streak = 0;
let shuffledQuestions = [...questions];

// DOM elements
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const restartAnytimeBtn = document.getElementById('restart-anytime-btn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const milestoneElement = document.getElementById('milestone');

// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load current question
function loadQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length) {
    questionElement.textContent = shuffledQuestions[currentQuestionIndex].question;
    answerInput.value = '';
    feedbackElement.textContent = '';
    submitBtn.style.display = 'inline';
    nextBtn.style.display = 'none';
    answerInput.focus();
  } else {
    endTest();
  }
}

// Check answer
function checkAnswer() {
  const userAnswer = normalizeString(answerInput.value.trim());
  const correctAnswer = normalizeString(shuffledQuestions[currentQuestionIndex].answer);
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = 'Correct! Bien joué!';
    feedbackElement.className = 'correct';
    correctCount++;
    streak++;
    checkMilestone();
  } else {
    feedbackElement.textContent = `Incorrect. La bonne réponse est "${shuffledQuestions[currentQuestionIndex].answer}".`;
    feedbackElement.className = 'incorrect';
    incorrectCount++;
    streak = 0;
  }
  updateScore();
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
}

// Update score
function updateScore() {
  scoreElement.textContent = `Correct: ${correctCount} | Incorrect: ${incorrectCount}`;
}

// Check milestones
function checkMilestone() {
  if (streak === 5) {
    showMilestone("Daddy is proud of you! Keep going!");
  } else if (streak === 10) {
    showMilestone("OMG! You're amazing! 10 in a row! Daddy loves you so much!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Show milestone
function showMilestone(message) {
  milestoneElement.textContent = message;
  milestoneElement.style.display = 'block';
  setTimeout(() => {
    milestoneElement.style.display = 'none';
  }, 3000);
}

// Next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// End test
function endTest() {
  questionElement.textContent = "Test terminé !";
  answerInput.style.display = 'none';
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  restartAnytimeBtn.style.display = 'none';
  restartBtn.style.display = 'inline';
  feedbackElement.textContent = `Score final : ${correctCount} correctes, ${incorrectCount} incorrectes.`;
}

// Restart test
function restartTest() {
  currentQuestionIndex = 0;
  correctCount = 0;
  incorrectCount = 0;
  streak = 0;
  shuffle(shuffledQuestions);
  updateScore();
  answerInput.style.display = 'inline';
  submitBtn.style.display = 'inline';
  restartAnytimeBtn.style.display = 'inline';
  restartBtn.style.display = 'none';
  loadQuestion();
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);
restartAnytimeBtn.addEventListener('click', restartTest);

// Enter key support
answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (submitBtn.style.display === 'inline') {
      checkAnswer();
    } else if (nextBtn.style.display === 'inline') {
      nextQuestion();
    }
  }
});

// Start test
shuffle(shuffledQuestions);
loadQuestion();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}