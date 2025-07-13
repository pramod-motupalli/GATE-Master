// questionBank.js
const questionBank = {
    1: {
        //maths
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following statements is/are TRUE for undirected graphs?\nP: Number of odd degree vertices is even.\nQ: Sum of degrees of all vertices is even.",
                options: [
                    "P only",
                    "Q only",
                    "Both P and Q",
                    "Neither P nor Q",
                ],
                answer: "Both P and Q",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A connected undirected graph has 100 vertices and 300 edges. Each edge is increased by weight 5. If the original MST weight is 500, what will be the new MST weight?",
                answer: "995",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "In how many ways can b blue balls and r red balls be distributed in n distinct boxes?",
                options: ["Option A", "Option B", "n!/b!r!", "Option D"],
                answer: "n!/b!r!",
            },
            {
                id: 4,
                type: "nat",
                question:
                    'The number of permutations of "LILAC" such that no character appears in its original position is ______.',
                answer: "44",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "The number of 4-digit numbers with digits in non-decreasing order using digits {1,2,3} is ______.",
                answer: "15",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "Expected length of a word drawn from “The quick brown fox jumps over the lazy dog”, each word on a separate paper, is ______.",
                answer: "3.9",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A graph is self-complementary if it is isomorphic to its complement. For all such graphs on n vertices, n is:",
                options: [
                    "A multiple of 4",
                    "Even",
                    "Odd",
                    "0 mod 4 or 1 mod 4",
                ],
                answer: "0 mod 4 or 1 mod 4",
            },
            {
                id: 8,
                type: "nat",
                question: "Number of divisors of 2100 is ______.",
                answer: "36",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which property does a graph with adjacency matrix A have: The number of 3-cycles is trace(A^3) divided by:",
                options: ["1", "2", "3", "6"],
                answer: "6",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A cycle on n vertices is isomorphic to its complement. The value of n is ______.",
                answer: "5",
            },
            {
                id: 11,
                type: "msq",
                question:
                    "Which of the following graphs has a topological order?\n(a) Graph A has a back edge\n(b) Graph B is strongly connected\n(c) Graph C is acyclic\n(d) Graph D has 2 source nodes",
                options: ["a", "b", "c", "d"],
                answer: ["c", "d"],
            },
            {
                id: 12,
                type: "nat",
                question:
                    "Maximum number of edges in a bipartite graph on 12 vertices is ______.",
                answer: "36",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Let G be a planar graph with 10 vertices, where each face has 3 edges. Number of edges is ______.",
                answer: "24",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Let G be a complete undirected graph on 6 vertices. Number of distinct 4-cycles in G is:",
                options: ["15", "30", "90", "360"],
                answer: "90",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "If a tree has 200 leaf nodes, the number of nodes with two children is ______.",
                answer: "199",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Let A = {1, 2, 3}, B = {x, y}. Number of functions from A to B is:",
                options: ["3", "6", "8", "9"],
                answer: "8",
            },
            {
                id: 2,
                type: "msq",
                question:
                    "Which of the following are true for a ring R?\n(a) 0·x = 0\n(b) x·0 = 0\n(c) -(-x) = x\n(d) x + y = y + x",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b", "c", "d"],
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Number of onto functions from a 4-element set to a 3-element set is ______.",
                answer: "36",
            },
            {
                id: 4,
                type: "nat",
                question: "If f(x) = x² + 3x + 2, what is ∫₀² f(x) dx?",
                answer: "18.6667",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "If A and B are two events such that P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
                options: ["0.2", "0.1", "0.3", "0.6"],
                answer: "0.2",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In a graph with 6 vertices and 9 edges, how many connected components can it have?",
                options: ["1", "2", "3", "Cannot say"],
                answer: "1",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "The number of 5-digit numbers formed using digits {1,2,3,4,5,6} without repetition is ______.",
                answer: "720",
            },
            {
                id: 8,
                type: "msq",
                question:
                    "Which of the following are linear transformations?\n(a) T(x) = 2x\n(b) T(x) = x + 3\n(c) T(x) = x²\n(d) T(x) = -x",
                options: ["a", "b", "c", "d"],
                answer: ["a", "d"],
            },
            {
                id: 9,
                type: "mcq",
                question: "What is the rank of the matrix [[1, 2], [2, 4]]?",
                options: ["0", "1", "2", "Undefined"],
                answer: "1",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Let X be a Poisson variable with mean 2. Find P(X = 0). Round to 3 decimal places.",
                answer: "0.135",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "If eigenvalues of a matrix are 3 and 4, then trace is ______.",
                answer: "7",
            },
            {
                id: 12,
                type: "mcq",
                question: "What is the Laplace transform of f(t) = 1?",
                options: ["1/s", "s", "s²", "0"],
                answer: "1/s",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "If a fair die is rolled twice, what is the expected sum of the outcomes?",
                answer: "7",
            },
            {
                id: 14,
                type: "mcq",
                question: "Let A be an n×n matrix such that A² = A. Then A is:",
                options: ["Singular", "Invertible", "Nilpotent", "Idempotent"],
                answer: "Idempotent",
            },
            {
                id: 15,
                type: "msq",
                question:
                    "Which of the following functions are even?\n(a) sin(x)\n(b) cos(x)\n(c) x²\n(d) e^(-x²)",
                options: ["a", "b", "c", "d"],
                answer: ["b", "c", "d"],
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following statements is/are TRUE about the function F?",
                options: [
                    "F is NOT well-defined.",
                    "F is an onto (or surjective) function.",
                    "F is a one-to-one (or injective) function.",
                    "F is a bijective function.",
                ],
                answer: [
                    "F is an onto (or surjective) function.",
                    "F is a one-to-one (or injective) function.",
                    "F is a bijective function.",
                ],
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Let U = {1, 2, 3}. Let 2^U denote the powerset of U. Consider a graph G where (A,B) is an edge iff A ⊆ B or B ⊆ A and A ≠ B. What is the cardinality of B(∅), the set of BFS orderings from the empty set?",
                answer: "5040",
            },
            {
                id: 3,
                type: "msq",
                question:
                    "Consider two sets: S1 = all n x n matrices over {a, b, c}, S2 = all functions from {0,…,n²–1} to {0,1,2}. Which of the following are correct?",
                options: [
                    "There does not exist a bijection from S1 to S2.",
                    "There exists a surjection from S1 to S2.",
                    "There exists a bijection from S1 to S2.",
                    "There does not exist an injection from S1 to S2.",
                ],
                answer: [
                    "There exists a surjection from S1 to S2.",
                    "There exists a bijection from S1 to S2.",
                ],
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Let S be a set of 10 elements. Find the number of tuples (A, B) such that A ⊆ B.",
                answer: "59049",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "What is the probability (rounded to 3 decimal places) that a random binary relation on {1,2,3} is reflexive?",
                answer: "0.125",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A relation R is defined on ℕ×ℕ as (a,b) R (c,d) if a ≤ c or b ≤ d. Consider: P: R is reflexive, Q: R is transitive. Which is TRUE?",
                options: [
                    "Both P and Q are true",
                    "P is true and Q is false",
                    "P is false and Q is true",
                    "Both P and Q are false",
                ],
                answer: "P is true and Q is false",
            },
            {
                id: 7,
                type: "mcq",
                question: "Which of the following is a tautology?",
                options: [
                    "P ∨ ¬P",
                    "¬(P ∧ ¬Q) ∨ (Q ∧ ¬P)",
                    "(P ∧ Q) → P",
                    "¬P → (Q ∨ P)",
                ],
                answer: "P ∨ ¬P",
            },
            {
                id: 8,
                type: "msq",
                question:
                    "Let A = {1,2}, B = {3,4}. Which of the following binary relations on A × B are symmetric?",
                options: [
                    "{((1,3), (3,1))}",
                    "{((2,4), (4,2))}",
                    "{((1,3), (1,3))}",
                    "{((2,4), (3,1))}",
                ],
                answer: [
                    "{((1,3), (3,1))}",
                    "{((2,4), (4,2))}",
                    "{((1,3), (1,3))}",
                ],
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the total number of reflexive relations on a set with 3 elements?",
                options: ["64", "512", "27", "729"],
                answer: "64",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "What is the number of functions from a set S of size 4 to itself that are bijective?",
                answer: "24",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Let G be a graph with 100 vertices and 300 edges. The weight of its MST is 500. What is the weight of the MST if each edge weight is increased by 5?",
                options: ["500", "995", "600", "1000"],
                answer: "995",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "What is the number of elements in the power set of a set A with 11 elements?",
                answer: "2048",
            },
            {
                id: 13,
                type: "msq",
                question:
                    "Which of the following sets form a group under the operation defined on the power set using symmetric difference?",
                options: ["({A,B,C}, Δ)", "(2^X, Δ)", "({∅}, Δ)", "(ℕ, Δ)"],
                answer: ["({A,B,C}, Δ)", "(2^X, Δ)"],
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Let L₁ = 1 and L₂ = 3. The recurrence Lₙ = Lₙ₋₁ + Lₙ₋₂ defines a sequence. What is the value of L₃?",
                options: ["4", "5", "6", "7"],
                answer: "4",
            },
            {
                id: 15,
                type: "nat",
                question: "Evaluate: ³C₂ × ²C₁",
                answer: "6",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "The number of onto functions from a 4-element set to a 3-element set is:",
                options: ["18", "36", "64", "81"],
                answer: "36",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "How many reflexive relations are there on a set with 3 elements?",
                answer: "64",
            },
            {
                id: 3,
                type: "mcq",
                question: "Which of the following is a tautology?",
                options: ["P ∨ ¬P", "P ∧ ¬P", "¬P ∧ Q", "¬(P ∧ Q)"],
                answer: "P ∨ ¬P",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "The number of functions from a 3-element set to a 2-element set is:",
                answer: "8",
            },
            {
                id: 5,
                type: "msq",
                question:
                    "Which of the following are even functions?\n(a) x^2\n(b) cos(x)\n(c) sin(x)\n(d) e^(–x²)",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b", "d"],
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "What is the number of elements in the powerset of a set with 4 elements?",
                options: ["8", "16", "4", "12"],
                answer: "16",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "If a die is rolled twice, the expected sum of outcomes is:",
                answer: "7",
            },
            {
                id: 8,
                type: "mcq",
                question: "Which one is not a valid group under addition?",
                options: [
                    "Z (integers)",
                    "R (real numbers)",
                    "Q (rationals)",
                    "N (natural numbers)",
                ],
                answer: "N (natural numbers)",
            },
            {
                id: 9,
                type: "msq",
                question:
                    "Let A = {1,2,3}. Which of the following relations on A are symmetric?\n(a) {(1,1), (2,2)}\n(b) {(1,2), (2,1)}\n(c) {(3,2), (2,3)}\n(d) {(1,2), (2,3)}",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b", "c"],
            },
            {
                id: 10,
                type: "nat",
                question:
                    "What is the number of derangements (no element appears in original position) of 4 elements?",
                answer: "9",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which of the following statements is true about graph isomorphism?",
                options: [
                    "All graphs are isomorphic",
                    "It is undecidable",
                    "It is in NP",
                    "It is in P",
                ],
                answer: "It is in NP",
            },
            {
                id: 12,
                type: "mcq",
                question: "A graph with even degree at every vertex has:",
                options: [
                    "No cycle",
                    "An Eulerian circuit",
                    "A Hamiltonian cycle",
                    "No edges",
                ],
                answer: "An Eulerian circuit",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "How many edges are there in a complete graph with 10 vertices?",
                answer: "45",
            },
            {
                id: 14,
                type: "nat",
                question: "Evaluate: ∑(i=1 to 10) i²",
                answer: "385",
            },
            {
                id: 15,
                type: "nat",
                question: "Evaluate: ³C₂ × ²C₁",
                answer: "6",
            },
        ],

        5: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Let p and q be two propositions. Consider the following two formulae in propositional logic:\nS1: (¬p ∧ (p ∨ q)) → q\nS2: q → (¬p ∧ (p ∨ q))\nWhich one of the following choices is correct?",
                options: [
                    "Both S1 and S2 are tautologies.",
                    "S1 is a tautology but S2 is not a tautology.",
                    "S1 is not a tautology but S2 is a tautology.",
                    "Neither S1 nor S2 is a tautology.",
                ],
                answer: "S1 is a tautology but S2 is not a tautology.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Choose the correct choice(s) regarding the following propositional logic assertion S:\nS: ((P ∧ Q) → R) → ((P ∧ Q) → (Q → R))",
                options: [
                    "S is neither a tautology nor a contradiction.",
                    "S is a tautology.",
                    "S is a contradiction.",
                    "The antecedent of S is logically equivalent to the consequent of S.",
                ],
                answer: "S is a tautology.",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Let p, q, r denote the statements “It is raining”, “It is cold”, and “It is pleasant”, respectively. Then the statement “It is not raining and it is pleasant, and it is not pleasant only if it is raining and it is cold” is represented by:",
                options: [
                    "(¬p ∧ r) ∧ (¬r → (p ∧ q))",
                    "(¬p ∧ r) ∧ ((p ∧ q) → ¬r)",
                    "(¬p ∧ r) ∨ ((p ∧ q) → ¬r)",
                    "(¬p ∧ r) ∨ (r → (p ∧ q))",
                ],
                answer: "(¬p ∧ r) ∧ (¬r → (p ∧ q))",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Let p, q and r be propositions and the expression (p → q) → r be a contradiction. Then, the expression (r → p) → q is:",
                options: [
                    "a tautology",
                    "a contradiction",
                    "always TRUE when p is FALSE",
                    "always TRUE when q is TRUE",
                ],
                answer: "always TRUE when q is TRUE",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Let p, q, r, s represent the following propositions:\np: x ∈ {8, 9, 10, 11, 12}\nq: x is a composite number\nr: x is a perfect square\ns: x is a prime number\nThe integer x ≥ 2 which satisfies ¬((p ⇒ q) ∧ (¬r ∨ ¬s)) is ________.",
                answer: "11",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The binary operator ≠ is defined by the following truth table:\n\np | q | p ≠ q\n--|---|------\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\nWhich of the following is true about the binary operator ≠?",
                options: [
                    "Both commutative and associative",
                    "Commutative but not associative",
                    "Not commutative but associative",
                    "Neither commutative nor associative",
                ],
                answer: "Both commutative and associative",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Let # be a binary operator defined as X # Y = X' + Y' where X and Y are Boolean variables. Consider the following two statements:\nS1: (P # Q) # R = P # (Q # R)\nS2: Q # R = R # Q\nWhich of the following is/are true for the Boolean variables P, Q and R?",
                options: [
                    "Only S1 is True",
                    "Only S2 is True",
                    "Both S1 and S2 are True",
                    "Neither S1 nor S2 are True",
                ],
                answer: "Only S2 is True",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which one of the following Boolean expressions is NOT a tautology?",
                options: [
                    "((a → b) ∧ (b → c)) → (a → c)",
                    "(a ↔ c) → (¬b → (a ∧ c))",
                    "(a ∧ b ∧ c) → (c ∨ a)",
                    "a → (b → a)",
                ],
                answer: "(a ↔ c) → (¬b → (a ∧ c))",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "The statement (¬p) ⇒ (¬q) is logically equivalent to which of the statements below?",
                options: ["p ⇒ q", "p ⇒ q and (¬p) ∨ q", "q ⇒ p", "(¬q) ∨ p"],
                answer: "p ⇒ q and (¬p) ∨ q",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which one of the following is NOT equivalent to p ↔ q?",
                options: [
                    "(¬p ∨ q) ∧ (p ∨ ¬q)",
                    "(¬p ∨ q) ∧ (q → p)",
                    "(¬p ∧ q) ∨ (p ∧ ¬q)",
                    "(¬p ∧ ¬q) ∨ (p ∧ q)",
                ],
                answer: "(¬p ∧ q) ∨ (p ∧ ¬q)",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "The binary operation ◻ is defined as follows:\n\nP | Q | P ◻ Q\n--|---|-------\nT | T | T\nT | F | T\nF | T | F\nF | F | T\n\nWhich one of the following is equivalent to P ∨ Q?",
                options: ["¬Q ◻ ¬P", "P ◻ ¬Q", "¬P ◻ Q", "¬P ◻ ¬Q"],
                answer: "¬Q ◻ ¬P",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "P and Q are two propositions. Which of the following logical expressions are equivalent?\n1. P ∨ ¬Q\n2. ¬(¬P ∧ Q)\n3. (P ∧ Q) ∨ (P ∧ ¬Q) ∨ (¬P ∧ ¬Q)\n4. (P ∧ Q) ∨ (P ∧ ¬Q) ∨ (¬P ∧ Q)",
                options: [
                    "Only 1 and 2",
                    "Only 1, 2 and 3",
                    "Only 1, 2 and 4",
                    "All of 1, 2, 3, and 4",
                ],
                answer: "Only 1, 2 and 3",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Consider the following expressions:\nI. False\nII. Q\nIII. True\nIV. P ∨ Q\nV. ¬Q ∨ P\nThe number of expressions given above that are logically implied by P ∧ (P ⇒ Q) is ________.",
                answer: "3",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider the following two statements:\nS1: If a candidate is known to be corrupt, then he will not be elected.\nS2: If a candidate is kind, he will be elected.\nWhich one of the following statements follows from S1 and S2 as per sound inference rules of logic?",
                options: [
                    "If a person is known to be corrupt, he is kind",
                    "If a person is not known to be corrupt, he is not kind",
                    "If a person is kind, he is not known to be corrupt",
                    "If a person is not kind, he is not known to be corrupt",
                ],
                answer: "If a person is kind, he is not known to be corrupt",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the following statements:\nP: Good mobile phones are not cheap\nQ: Cheap mobile phones are not good\nL: P implies Q\nM: Q implies P\nN: P is equivalent to Q\nWhich one of the following about L, M, and N is CORRECT?",
                options: [
                    "Only L is TRUE",
                    "Only M is TRUE",
                    "Only N is TRUE",
                    "L, M and N are TRUE",
                ],
                answer: "L, M and N are TRUE",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the following logical inferences.\nI1: If it rains then the cricket match will not be played.\nThe cricket match was played.\nInference: There was no rain.\n\nI2: If it rains then the cricket match will not be played.\nIt did not rain.\nInference: The cricket match was played.\n\nWhich of the following is TRUE?",
                options: [
                    "Both I1 and I2 are correct inferences",
                    "I1 is correct but I2 is not a correct inference",
                    "I1 is not correct but I2 is a correct inference",
                    "Both I1 and I2 are not correct inferences",
                ],
                answer: "I1 is correct but I2 is not a correct inference",
            },
            {
                id: 2,
                type: "msq",
                question:
                    "Geetha has a conjecture about integers, which is of the form ∀x (P(x) ⇒ ∃y Q(x, y)), where P is a statement about integers, and Q is a statement about pairs of integers. Which of the following option(s) would imply Geetha’s conjecture?",
                options: ["a", "b", "c", "d"],
                answer: ["d"],
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "The CORRECT formula for the sentence, “not all rainy days are cold” is:",
                options: [
                    "∀d (Rainy(d) ∧ ¬Cold(d))",
                    "∀d (¬Rainy(d) → Cold(d))",
                    "∃d (¬Rainy(d) → Cold(d))",
                    "∃d (Rainy(d) ∧ ¬Cold(d))",
                ],
                answer: "∃d (Rainy(d) ∧ ¬Cold(d))",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the statement: “Not all that glitters is gold”. Predicate glitters(x) is true if x glitters and predicate gold(x) is true if x is gold. Which one of the following logical formulae represents the above statement?",
                options: [
                    "∀x: glitters(x) ⇒ ¬gold(x)",
                    "∀x: gold(x) ⇒ glitters(x)",
                    "∃x: gold(x) ∧ ¬glitters(x)",
                    "∃x: glitters(x) ∧ ¬gold(x)",
                ],
                answer: "∃x: glitters(x) ∧ ¬gold(x)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "What is the logical translation of the statement: 'None of my friends are perfect'?",
                options: [
                    "∃x (F(x) ∧ ¬P(x))",
                    "∃x (¬F(x) ∧ P(x))",
                    "∃x (¬F(x) ∧ ¬P(x))",
                    "¬∃x (F(x) ∧ P(x))",
                ],
                answer: "¬∃x (F(x) ∧ P(x))",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which one of the following predicate formulae is NOT logically valid? (W is a predicate without any free x)",
                options: [
                    "∃x (p(x) ∧ W) ≡ ∃x p(x) ∧ W",
                    "∃x (p(x) → W) ≡ ∀x p(x) → W",
                    "∀x (p(x) → W) ≡ ∀x p(x) → W",
                    "∀x (p(x) ∨ W) ≡ ∀x p(x) ∨ W",
                ],
                answer: "∃x (p(x) → W) ≡ ∀x p(x) → W",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the first-order logic sentence F: ∀x(∃y R(x, y)). Assuming non-empty domains, which of the sentences are implied by F?",
                options: [
                    "IV only",
                    "I and IV only",
                    "II only",
                    "II and III only",
                ],
                answer: "I and IV only",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which one of the following well-formed formulae in predicate calculus is NOT valid?",
                options: [
                    "(∀x p(x) ⇒ ∀x q(x)) ⇒ (∃x ¬p(x) ∨ ∀x q(x))",
                    "(∃x p(x) ∨ ∃x q(x)) ⇒ ∃x (p(x) ∨ q(x))",
                    "∃x (p(x) ∧ q(x)) ⇒ (∃x p(x) ∧ ∃x q(x))",
                    "∀x (p(x) ∨ q(x)) ⇒ (∀x p(x) ∨ ∀x q(x))",
                ],
                answer: "∀x (p(x) ∨ q(x)) ⇒ (∀x p(x) ∨ ∀x q(x))",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which one of the following is NOT logically equivalent to ¬∃x (∀y α ∧ ∀z β)?",
                options: [
                    "∀x (∃z ¬β → ∀y α)",
                    "∀x (∀z β → ∃y ¬α)",
                    "∀x (∀y α → ∃z ¬β)",
                    "∀x (∃y ¬α ∨ ∃z ¬β)",
                ],
                answer: "∀x (∃z ¬β → ∀y α)",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following formulae are equivalent?\nI. ¬∀x P(x)\nII. ¬∃x P(x)\nIII. ¬∃x (¬P(x))\nIV. ∃x (¬P(x))",
                options: ["I and III", "I and IV", "II and III", "II and IV"],
                answer: "I and IV",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the negation of [∀x, α → (∃y, β → (∀u, ∃v, γ))]?",
                options: [
                    "∃x, α → (∀y, β → (∃u, ∀v, γ))",
                    "∃x, α → (∀y, β → (∃u, ∀v, ¬γ))",
                    "∀x, ¬α → (∃y, ¬β → (∀u, ∃v, ¬γ))",
                    "∃x, α ∧ (∀y, β ∧ (∃u, ∀v, ¬γ))",
                ],
                answer: "∃x, α ∧ (∀y, β ∧ (∃u, ∀v, ¬γ))",
            },
            {
                id: 12,
                type: "msq",
                question:
                    "Let f: A → B be an onto function, and define an equivalence relation ~ on A by: a1 ~ a2 if f(a1) = f(a2). Let ε = {|x| : x ∈ A} be the set of all equivalence classes under ~. Define F: ε → B by F([x]) = f(x). Which of the following statements is/are TRUE?",
                options: ["a", "b", "c", "d"],
                answer: ["b", "c", "d"],
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Let U = {1, 2, 3}. Let 2^U denote the powerset of U. Consider an undirected graph G with vertex set 2^U. For A, B ∈ 2^U, (A, B) is an edge if A ≠ B and (A ⊆ B or B ⊆ A). If φ is the empty set, what is the cardinality of B(φ)?",
                answer: "40320",
            },
            {
                id: 14,
                type: "msq",
                question:
                    "Consider the following sets where n ≥ 2:\nS1: Set of all n × n matrices with entries from {a, b, c}\nS2: Set of all functions from {0, 1, ..., n^2 – 1} to {0, 1, 2}\nWhich of the following is/are correct?",
                options: ["a", "b", "c", "d"],
                answer: ["b", "c"],
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Let S be a set of 10 elements. The number of tuples (A, B) such that A ⊆ B ⊆ S is:",
                answer: "31623",
            },
        ],
        7: [
            {
                id: 1,
                type: "nat",
                question:
                    "Let R be the set of all binary relations on the set {1, 2, 3}. Suppose a relation is chosen from R at random. The probability that the chosen relation is reflexive (round off to 3 decimal places) is",
                answer: "0.019",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A binary relation R on ℕ × ℕ is defined as follows: (a, b) R (c, d) if a ≤ c or b ≤ d. Consider the following propositions:\nP: R is reflexive\nQ: R is transitive\nWhich one of the following statements is TRUE?",
                options: [
                    "Both P and Q are true",
                    "P is true and Q is false",
                    "P is false and Q is true",
                    "Both P and Q are false",
                ],
                answer: "P is true and Q is false",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A function f: ℕ⁺ → ℕ⁺, defined on the set of positive integers ℕ⁺, satisfies the following properties:\n- f(n) = f(n/2) if n is even\n- f(n) = f(n+5) if n is odd\nLet R = {i | ∃j: f(j) = i} be the set of distinct values that f takes. The maximum possible size of R is",
                answer: "6",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Let R be a relation on the set of ordered pairs of positive integers such that ((p, q), (r, s)) ∈ R if and only if p – s = q – r. Which one of the following is true about R?",
                options: [
                    "Both reflexive and symmetric",
                    "Reflexive but not symmetric",
                    "Not reflexive but symmetric",
                    "Neither reflexive nor symmetric",
                ],
                answer: "Both reflexive and symmetric",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Let X and Y denote the sets containing 2 and 20 distinct objects respectively and F denote the set of all possible functions defined from X to Y. Let f be randomly chosen from F. The probability of f being one-to-one is",
                answer: "0.95",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "The number of onto functions (surjective functions) from set X = {1, 2, 3, 4} to set Y = {a, b, c} is",
                answer: "36",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "The cardinality of the power set of {0, 1, 2, ..., 10} is",
                answer: "2048",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Let R be the relation on the set of positive integers such that aRb if and only if a and b are distinct and have a common divisor other than 1. Which one of the following statements about R is TRUE?",
                options: [
                    "R is symmetric and reflexive but not transitive",
                    "R is reflexive but not symmetric and not transitive",
                    "R is transitive but not reflexive and not symmetric",
                    "R is symmetric but not reflexive and not transitive",
                ],
                answer: "R is symmetric but not reflexive and not transitive",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "For a set A, the power set of A is denoted by 2^A. If A = {5, {6}, {7}}, which of the following options are TRUE?\n1. ∅ ∈ 2^A\n2. ∅ ⊆ 2^A\n3. {5, {6}} ∈ 2^A\n4. {5, {6}} ⊆ 2^A",
                options: [
                    "1 and 3 only",
                    "2 and 3 only",
                    "1, 2 and 3 only",
                    "1, 2 and 4 only",
                ],
                answer: "1, 2 and 3 only",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "If g(x) = 1 – x and h(x) = x / (x – 1), then g(h(x)) / h(g(x)) is",
                options: ["h(x)/g(x)", "-1/x", "g(x)/h(x)", "(x / (1 – x))^2"],
                answer: "-1/x",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Let S denote the set of all functions f: {0,1}⁴ → {0,1}. Denote by N the number of functions from S to the set {0,1}. The value of log₂ log₂ N is",
                answer: "4",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "How many onto (or surjective) functions are there from an n-element (n ≥ 2) set to a 2-element set?",
                options: ["2^n", "2^n – 1", "2^n – 2", "2(2^n – 2)"],
                answer: "2^n – 2",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the possible number of reflexive relations on a set of 5 elements?",
                options: ["2^10", "2^15", "2^20", "2^25"],
                answer: "2^10",
            },
            {
                id: 14,
                type: "msq",
                question:
                    "Let X be a set and 2^X denote the powerset of X. Define a binary operation Δ on 2^X as follows: A Δ B = (A − B) ∪ (B − A). Let H = (2^X, Δ). Which of the following statements about H is/are correct?",
                options: [
                    "H is a group",
                    "Every element in H has an inverse, but H is NOT a group",
                    "For every A ∈ 2^X, the inverse of A is the complement of A",
                    "For every A ∈ 2^X, the inverse of A is A",
                ],
                answer: ["a", "d"],
            },
            {
                id: 15,
                type: "msq",
                question:
                    "Which of the following statements is/are TRUE for a group G?\n(a) If for all x, y ∈ G, (xy)^2 = x²y², then G is commutative.\n(b) If for all x ∈ G, x² = 1, then G is commutative. Here, 1 is the identity element of G.\n(c) If the order of G is 2, then G is commutative.\n(d) If G is commutative, then a subgroup of G need not be commutative.",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b", "c"],
            },
        ],
        8: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the binary relation: R = {(x, y), (x, z), (z, x), (z, y)} on the set {x, y, z}. Which one of the following is TRUE?",
                options: [
                    "R is symmetric but NOT antisymmetric",
                    "R is NOT symmetric but antisymmetric",
                    "R is both symmetric and antisymmetric",
                    "R is neither symmetric nor antisymmetric",
                ],
                answer: "R is NOT symmetric but antisymmetric",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "If P, Q, R are subsets of the universal set U, then (P ∩ Q ∩ R) ∪ (Pc ∩ Q ∩ R) ∪ Qc ∪ Rc is",
                options: ["Qc ∪ Rc", "P ∪ Qc ∪ Rc", "Pc ∪ Qc ∪ Rc", "U"],
                answer: "Qc ∪ Rc",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the set X = {a, b, c, d, e} under the partial ordering: R = {(a, a), (a, b), (a, c), (a, d), (a, e), (b, b), (b, c), (b, e), (c, c), (c, e), (d, d), (d, e), (e, e)}. The minimum number of ordered pairs that need to be added to R to make (X, R) a lattice is",
                answer: "?",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the following Hasse diagrams. Which all of the above represent a lattice?",
                options: [
                    "(i) and (iv) only",
                    "(ii) and (iii) only",
                    "(iii) only",
                    "(i), (ii) and (iv) only",
                ],
                answer: "(i), (ii) and (iv) only",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Let G be a group of 35 elements. Then the largest possible size of a subgroup of G other than G itself is",
                answer: "7",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Let G be a finite group on 84 elements. The size of a largest possible proper subgroup of G is",
                options: ["28", "42", "21", "12"],
                answer: "42",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "Let G be a group with 15 elements. Let L be a subgroup of G. It is known that L ≠ G and that the size of L is at least 4. The size of L is",
                answer: "5",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A binary operation ⊕ on a set of integers is defined as x ⊕ y = x² + y². Which of the following statements is TRUE about ⊕?",
                options: [
                    "Commutative but not associative",
                    "Both commutative and associative",
                    "Associative but not commutative",
                    "Neither commutative nor associative",
                ],
                answer: "Commutative but not associative",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the set S = {1, ω, ω²}, where ω and ω² are cube roots of unity. If * denotes the multiplication operation, the structure {S, *} forms",
                options: ["a group", "a ring", "an integral domain", "a field"],
                answer: "a group",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "For the composition table of a cyclic group shown below: Which one of the following choices is correct?",
                options: [
                    "a, b are generators",
                    "b, c are generators",
                    "c, d are generators",
                    "d, a are generators",
                ],
                answer: "a, b are generators",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "G is an undirected graph with n vertices and 25 edges such that each vertex of G has degree at least 3. Then the maximum possible value of n is",
                answer: "16",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "Let T be a tree with 10 vertices. The sum of the degrees of all the vertices in T is",
                answer: "18",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "An ordered n-tuple (d1, d2, …, dn) with d1 ≥ d2 ≥ … ≥ dn, is called graphic if there exists a simple undirected graph with n vertices having degrees d1, d2, …, dn respectively. Which of the following 6-tuples is NOT graphic?",
                options: [
                    "(1, 1, 1, 1, 1, 1)",
                    "(2, 2, 2, 2, 2, 2)",
                    "(3, 3, 3, 1, 0, 0)",
                    "(3, 2, 1, 1, 1, 0)",
                ],
                answer: "(3, 2, 1, 1, 1, 0)",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "The degree sequence of a simple graph is the sequence of the degrees of the nodes in the graph in decreasing order. Which of the following sequences cannot be the degree sequence of any graph?",
                options: [
                    "I. 7, 6, 5, 4, 4, 3, 2, 1",
                    "II. 6, 6, 6, 6, 3, 3, 2, 2",
                    "III. 7, 6, 6, 4, 4, 3, 2, 2",
                    "IV. 8, 7, 7, 6, 4, 2, 1, 1",
                ],
                answer: "II. 6, 6, 6, 6, 3, 3, 2, 2 and IV. 8, 7, 7, 6, 4, 2, 1, 1",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Let G = (V, E) be a graph. Define Φ(G) = Σ id × d, where id is the number of vertices of degree d in G. If S and T are two different trees with Φ(S) = Φ(T) then",
                options: [
                    "|S| = 2 |T|",
                    "|S| = |T| - 1",
                    "|S| = |T|",
                    "|S| = |T| + 1",
                ],
                answer: "|S| = |T|",
            },
        ],
        9: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider an undirected random graph of eight vertices. The probability that there is an edge between a pair of vertices is 1/2. What is the expected number of unordered cycles of length three?",
                options: ["1/8", "1", "7", "8"],
                answer: "1",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Let G be connected undirected graph of 100 vertices and 300 edges. The weight of a minimum spanning tree of G is 500. When the weight of each edge of G is increased by five, the weight of a minimum spanning tree becomes",
                answer: "995",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider a binary tree T that has 200 leaf nodes. Then, the number of nodes in T that have exactly two children are",
                answer: "199",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A graph is self-complementary if it is isomorphic to its complement. For all self-complementary graphs on n vertices, n is",
                options: [
                    "A multiple of 4",
                    "Even",
                    "Odd",
                    "Congruent to 0 mod 4, or 1 mod 4",
                ],
                answer: "Congruent to 0 mod 4, or 1 mod 4",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "The number of distinct minimum spanning trees for the weighted graph below is",
                answer: "?",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A cycle on n vertices is isomorphic to its complement. The value of n is",
                answer: "5",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "The maximum number of edges in a bipartite graph on 12 vertices is",
                answer: "36",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following statements is/are TRUE for undirected graph? P: Number of odd degree vertices is even. Q: Sum of degrees of all vertices is even.",
                options: [
                    "P only",
                    "Q only",
                    "Both P and Q",
                    "Neither P nor Q",
                ],
                answer: "Both P and Q",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider an undirected graph G where self-loops are not allowed. The vertex set of G is {(i, j): 1 ≤ i ≤ 12, 1 ≤ j ≤ 12}. There is an edge between (a, b) and (c, d) if |a – c| ≤ 1 and |b – d| ≤ 1. The number of edges in this graph is",
                answer: "1254",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Let G be a complete undirected graph on 6 vertices. If vertices of G are labeled, then the number of distinct cycles of length 4 in G is equal to",
                options: ["15", "30", "90", "360"],
                answer: "90",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider a simple undirected graph of 10 vertices. If the graph is disconnected, then the maximum number of edges it can have is",
                answer: "36",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider a simple undirected unweighted graph with at least three vertices. If A is the adjacency matrix of the graph, then the number of 3-cycles in the graph is given by the trace of",
                options: [
                    "A³",
                    "A³ divided by 2",
                    "A³ divided by 3",
                    "A³ divided by 6",
                ],
                answer: "A³ divided by 6",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which of the properties hold for the adjacency matrix A of a simple undirected unweighted graph having n vertices?",
                options: [
                    "The diagonal entries of A² are the degrees of the vertices of the graph.",
                    "If the graph is connected, then none of the entries of A^{n – 1} + I_n can be zero.",
                    "If the sum of all the elements of A is at most 2(n-1), then the graph must be acyclic.",
                    "If there is at least a 1 in each of A’s rows and columns, then the graph must be connected.",
                ],
                answer: "The diagonal entries of A² are the degrees of the vertices of the graph.",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Let G(V, E) be a directed graph, where V = {1, 2, 3, 4, 5} and adjacency matrix A is defined as A[i][j] = 1 for 1 ≤ j ≤ i ≤ 5, and 0 otherwise. The number of directed spanning trees rooted at vertex 5 is",
                answer: "16",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "A directed spanning tree of G, rooted at r ∈ V, is defined as a subgraph T of G such that the undirected version of T is a tree, and T contains a directed path from r to every other vertex in V. The number of such directed spanning trees rooted at vertex 5 is",
                answer: "16",
            },
        ],
        10: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Let U = {1, 2,...,n}, where n is a large positive integer greater than 1000. Let k be a positive integer less than n. Let A, B be subsets of U with |A| = |B| = k and A ∩ B = ∅. We say that a permutation of U separates A from B if one of the following is true: all members of A appear in the permutation before any of the members of B, or all members of B appear in the permutation before any of the members of A. How many permutations of U separate A from B?",
                options: [
                    "n!",
                    "(2k)! (n - 2k)! / 2",
                    "2 (2k)! (n - 2k)! / k!",
                    "2 * 2 (2k)! (n - 2k)! / k!^2",
                ],
                answer: "(2k)! (n - 2k)! / 2",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "The number of permutations of the characters in LILAC so that no character appears in its original position, if the two L’s are indistinguishable, is",
                answer: "44",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "The number of 4-digit numbers having their digits in non-decreasing order (from left to right) constructed by using the digits belonging to the set {1, 2, 3} is",
                answer: "20",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Each of the nine words in the sentence 'The quick brown fox jumps over the lazy dog' is written on a separate piece of paper. These nine pieces of paper are kept in a box. One of the pieces is drawn at random from the box. The expected length of the word drawn is (rounded to one decimal place)",
                answer: "3.9",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A pennant is a sequence of numbers, each number being 1 or 2. An n-pennant is a sequence of numbers with sum equal to n. For example, (1,1,2) is a 4-pennant. The number of 10-pennants is",
                answer: "89",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In how many ways can b blue balls and r red balls be distributed in n distinct boxes?",
                options: [
                    "((n + b - 1)! / (n - 1)! b!) * ((n + r - 1)! / (n - 1)! r!)",
                    "((n + b + r - 1)! ) / ((n - 1)! (b - r)!)",
                    "n! / (b! r!)",
                    "((n + b + r - 1)! n!) / (b! (r - 1)!)",
                ],
                answer: "((n + b - 1)! / (n - 1)! b!) * ((n + r - 1)! / (n - 1)! r!)",
            },
            {
                id: 7,
                type: "nat",
                question: "The number of divisors of 2100 is",
                answer: "36",
            },
            {
                id: 8,
                type: "nat",
                question: "Evaluate the sum: Σ from x=0 to 99 of (x+1) * x!",
                answer: "100!",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "The number of distinct positive integral factors of 2014 is",
                answer: "8",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Let P = sum of odd i from 1 to 2k, and Q = sum of even i from 1 to 2k, where k is a positive integer. Then which relation holds?",
                answer: "P = Q - k",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which one of the following is a closed form expression for the generating function of the sequence {a_n}, where a_n = 2^n + 3 for all n = 0, 1, 2, ...?",
                options: [
                    " (3)/(1 - 2x)",
                    " (2 + 3x)/(1 - x)",
                    " (3)/(1 - x) - 2^x",
                    " (3 + 2x)/(1 - x)",
                ],
                answer: "(3)/(1 - 2x)",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "If the ordinary generating function of a sequence {a_n} is z^3 / (1 + z), then a_3 - a_0 is equal to",
                answer: "-1",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "The Lucas sequence L_n is defined by the recurrence relation: L_n = L_{n-1} + L_{n-2}, for n ≥ 3, with L_1 = 1 and L_2 = 3. Which one of the options given is TRUE?",
                options: [
                    "L_n = ( (1 + √5)^n + (1 - √5)^n ) / 2",
                    "L_n = ( (1 + √5)^n - (1 - √5)^n ) / 3",
                    "L_n = ( (1 + √5)^n + (1 - √5)^n ) / 3",
                    "L_n = ( (1 + √5)^n - (1 - √5)^n ) / 2",
                ],
                answer: "L_n = ( (1 + √5)^n + (1 - √5)^n ) / 3",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Consider the recurrence relation a_1 = 8, a_n = 6n^2 + 2n + a_{n-1}. Let a_99 = K × 10^4. The value of K is",
                answer: "198",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "The coefficient of x^{12} in (x^3 + x^4 + x^5 + x^6 + ...)^{3} is",
                answer: "28",
            },
        ],
    },
    // Add more subjects as needed
    2: {
        //cd
        8: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the following statements regarding the front-end and back-end of a compiler.\nS1: The front-end includes phases that are independent of the target hardware.\nS2: The back-end includes phases that are specific to the target hardware.\nS3: The back-end includes phases that are specific to the programming language used in the source code.\nIdentify the CORRECT option.",
                options: [
                    "Only S1 is TRUE",
                    "Only S1 and S2 are TRUE",
                    "S1, S2, and S3 are all TRUE",
                    "Only S1 and S3 are TRUE",
                ],
                answer: "Only S1 and S2 are TRUE",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider the following ANSI C program:\nint main() {\n  Integer x;\n  return ();\n}\nWhich one of the following phases in a seven-phase C compiler will throw an error?",
                options: [
                    "Lexical analyzer",
                    "Syntax analyzer",
                    "Semantic analyzer",
                    "Machine dependent optimizer",
                ],
                answer: "Semantic analyzer",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Match the following according to input from List-I to the compiler phase in List-II that processes it:\nList-I: (P) Syntax tree, (Q) Character stream, (R) Intermediate representation, (S) Token stream\nList-II: (i) Code generator, (ii) Syntax analyser, (iii) Semantic analyser, (iv) Lexical analyser",
                options: [
                    "P → (ii), Q → (iii), R → (iv), S → (i)",
                    "P → (ii), Q → (i), R → (iii), S → (iv)",
                    "P → (iii), Q → (iv), R → (i), S → (ii)",
                    "P → (i), Q → (iv), R → (ii), S → (iii)",
                ],
                answer: "P → (ii), Q → (i), R → (iii), S → (iv)",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Match the following:\nP: Lexical analysis, Q: Top down parsing, R: Semantic analysis, S: Runtime environment\nList-II: (i) Leftmost derivation, (ii) Type checking, (iii) Regular expressions, (iv) Activation records",
                options: [
                    "P → (i), Q → (ii), R → (iv), S → (iii)",
                    "P → (iii), Q → (i), R → (ii), S → (iv)",
                    "P → (ii), Q → (iii), R → (i), S → (iv)",
                    "P → (iv), Q → (i), R → (ii), S → (iii)",
                ],
                answer: "P → (iii), Q → (i), R → (ii), S → (iv)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "In a compiler, keywords of a language are recognized during",
                options: [
                    "parsing of the program",
                    "the code generation",
                    "the lexical analysis of the program",
                    "dataflow analysis",
                ],
                answer: "the lexical analysis of the program",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which data structure in a compiler is used for managing information about variables and their attributes?",
                options: [
                    "Abstract syntax tree",
                    "Symbol table",
                    "Semantic stack",
                    "Parse table",
                ],
                answer: "Symbol table",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The lexical analysis for a modern computer language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",
                options: [
                    "Finite state automata",
                    "Deterministic pushdown automata",
                    "Non-deterministic pushdown automata",
                    "Turing Machine",
                ],
                answer: "Finite state automata",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A lexical analyzer uses the following patterns to recognize three tokens T1, T2 and T3 over the alphabet {a, b, c}.\nT1: a? (b│c)* a\nT2: b? (a│c)* b\nT3: c? (b│a)* c\nNote that `x?` means 0 or 1 occurrence of symbol x. The analyzer outputs the token that matches the longest possible prefix.\nIf the string bbaacabc is processed by the analyzer, which one of the following is the sequence of tokens it outputs?",
                options: ["T1 T2 T3", "T1 T1 T3", "T2 T1 T3", "T3 T3"],
                answer: "T2 T1 T3",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the following expression grammar G:\nE → E − T | T\nT → T + F | F\nF → (E) | id\nWhich of the following grammars is not left recursive, but is equivalent to G?",
                options: [
                    "E → E−T | T",
                    "E → T E′\nT → T+F | F\nE′ → − T E′ | ε\nF → (E) | id",
                    "E → T X",
                    "E → T X | (T X)\nX → − T X | ε\nX → − T X | + T X | ε\nT → F Y\nY → + F Y | ε\nF → (E) | id",
                ],
                answer: "E → T X | (T X)\nX → − T X | ε\nX → − T X | + T X | ε\nT → F Y\nY → + F Y | ε\nF → (E) | id",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the following context-free grammar where terminals are {a, b, c, d, f}:\nS → d a T | R f\nT → a S | b a T | ε\nR → c a T R | ε\nA partially-filled LL(1) parsing table is given. Which one of the following choices represents the correct combinations for the numbered cells in the parsing table (‘blank’ denotes empty cell)?",
                options: [
                    "(1) S → R f\n(2) S → R f\n(3) T → ε\n(4) T → ε",
                    "(1) blank\n(2) S → R f\n(3) T → ε\n(4) T → ε",
                    "(1) S → R f\n(2) blank\n(3) blank\n(4) T → ε",
                    "(1) blank\n(2) S → R f\n(3) blank\n(4) blank",
                ],
                answer: "(1) S → R f\n(2) S → R f\n(3) T → ε\n(4) T → ε",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider the grammar:\nS → A a\nA → B D\nB → b | ε\nD → d | ε\nGiven terminal indices as: a=3, b=2, d=1, $=0\nCompute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in descending order.",
                answer: "3,1",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the grammar:\nP → x Q R S\nQ → y z | z\nR → w | ε\nS → y\nWhat is FOLLOW(Q)?",
                options: ["{R}", "{w}", "{w, y}", "{w, $}"],
                answer: "{w, y}",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "For the grammar below, a partial LL(1) parsing table is presented with entries E1, E2, and E3 to fill.\nS → a A b B | b A a B | ε\nA → S\nB → S\nThe FIRST and FOLLOW sets for A and B are:",
                options: [
                    "FIRST(A) = {a,b,ε} = FIRST(B), FOLLOW(A) = {a,b}, FOLLOW(B) = {a,b,$}",
                    "FIRST(A) = {a,b,$}, FIRST(B) = {a,b,ε}, FOLLOW(A) = {a,b}, FOLLOW(B) = {$}",
                    "FIRST(A) = {a,b,ε} = FIRST(B), FOLLOW(A) = {a,b}, FOLLOW(B) = {$}",
                    "FIRST(A) = {a,b} = FIRST(B), FOLLOW(A) = {a,b}, FOLLOW(B) = {a,b}",
                ],
                answer: "FIRST(A) = {a,b,ε} = FIRST(B), FOLLOW(A) = {a,b}, FOLLOW(B) = {a,b,$}",
            },
            {
                id: 14,
                type: "mcq",
                question: "The appropriate entries for E1, E2, and E3 are:",
                options: [
                    "E1: S → a A b B, A → S\nE2: S → b A a B, B → S\nE3: B → S",
                    "E1: S → a A b B, S → ε\nE2: S → b A a B, S → ε\nE3: B → S",
                    "E1: S → a A b B\nE2: S → b A a B\nE3: S → ε",
                    "E1: S → a A b B, A → S\nE2: S → b A a B\nE3: S → ε",
                ],
                answer: "E1: S → a A b B, A → S\nE2: S → b A a B, B → S\nE3: B → S",
            },
            {
                id: 15,
                type: "msq",
                question:
                    "In a compiler, keywords of a language are not recognized during",
                options: [
                    "parsing of the program",
                    "the code generation",
                    "the lexical analysis of the program",
                    "dataflow analysis",
                ],
                answer: [
                    "parsing of the program",
                    "the code generation",
                    "dataflow analysis",
                ],
            },
        ],
        9: [
            {
                id: 1,
                type: "mcq",
                question: "Which one of the following statements is TRUE?",
                options: [
                    "The LALR(1) parser for a grammar G cannot have reduce–reduce conflict if the LR(1) parser for G does not have reduce–reduce conflict.",
                    "Symbol table is accessed only during the lexical analysis phase.",
                    "Data flow analysis is necessary for run-time memory management.",
                    "LR(1) parsing is sufficient for deterministic context–free languages.",
                ],
                answer: "The LALR(1) parser for a grammar G cannot have reduce–reduce conflict if the LR(1) parser for G does not have reduce–reduce conflict.",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider the augmented grammar with {+, *, (, ), id} as the set of terminals.\nS′ → S\nS → S + R | R\nR → R * P | P\nP → (S) | id\nIf I0 is the set of two LR(0) items {[S → S.], [S → S. + R]}, then goto(closure(I0), +) contains exactly ______ items.",
                answer: "4",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the following statements:\nS1: Every SLR(1) grammar is unambiguous but there are certain unambiguous grammars that are not SLR(1).\nS2: For any context-free grammar, there is a parser that takes at most O(n³) time to parse a string of length n.\nWhich one of the following options is correct?",
                options: [
                    "S1 is true and S2 is false",
                    "S1 is false and S2 is true",
                    "S1 is true and S2 is true",
                    "S1 is false and S2 is false",
                ],
                answer: "S1 is true and S2 is true",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Consider the following augmented grammar with {#, @, <, >, a, b, c} as the set of terminals:\nS′ → S\nS → S # c S\nS → S S\nS → S @\nS → < S >\nS → a\nS → b\nS → c\nLet I0 = CLOSURE({S′ → .S}). The number of items in the set GOTO(GOTO(I0, <), <) is ______.",
                answer: "7",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Consider the following grammar:\nS → a S B | d\nB → b\nThe number of reduction steps taken by a bottom-up parser while accepting the string aaadbbb is ______.",
                answer: "7",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which one of the following kinds of derivation is used by LR parsers?",
                options: [
                    "Leftmost",
                    "Leftmost in reverse",
                    "Rightmost",
                    "Rightmost in reverse",
                ],
                answer: "Rightmost in reverse",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which of the following statements about parser is/are CORRECT?\nI. Canonical LR is more powerful than SLR.\nII. SLR is more powerful than LALR.\nIII. SLR is more powerful than Canonical LR.",
                options: ["I only", "II only", "III only", "II and III only"],
                answer: "I only",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider the following grammar G:\nS → F | H\nF → p | c\nH → d | c\nWhere S, F and H are non-terminal symbols, p, d and c are terminal symbols. Which of the following statement(s) is/are correct?\nS1: LL(1) can parse all strings generated by grammar G.\nS2: LR(1) can parse all strings generated by grammar G.",
                options: [
                    "Only S1",
                    "Only S2",
                    "Both S1 and S2",
                    "Neither S1 nor S2",
                ],
                answer: "Only S2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Among simple LR (SLR), canonical LR, and lookahead LR (LALR), which of the following pairs identify the method that is very easy to implement and the method that is the most powerful, in that order?",
                options: [
                    "SLR, LALR",
                    "Canonical LR, LALR",
                    "SLR, canonical LR",
                    "LALR, canonical LR",
                ],
                answer: "SLR, canonical LR",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which one of the following is TRUE at any valid state in shift-reduce parsing?",
                options: [
                    "Viable prefixes appear only at the bottom of the stack and not inside",
                    "Viable prefixes appear only at the top of the stack and not inside",
                    "The stack contains only a set of viable prefixes",
                    "The stack never contains viable prefixes",
                ],
                answer: "The stack contains only a set of viable prefixes",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A canonical set of items is given below:\nS → L. > R\nQ → R.\nOn input symbol > the set has:",
                options: [
                    "a shift-reduce conflict and a reduce-reduce conflict.",
                    "a shift-reduce conflict but not a reduce-reduce conflict.",
                    "a reduce-reduce conflict but not a shift-reduce conflict.",
                    "neither a shift-reduce nor a reduce-reduce conflict.",
                ],
                answer: "a shift-reduce conflict but not a reduce-reduce conflict.",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the following two sets of LR(1) items of an LR(1) grammar.\nWhich of the following statement(s) related to merging of the two sets in the corresponding LALR parser is/are FALSE?\n1. Cannot be merged since lookaheads are different.\n2. Can be merged but will result in S-R conflict.\n3. Can be merged but will result in R-R conflict.\n4. Cannot be merged since goto on c will lead to two different sets.",
                options: ["1 only", "2 only", "1 and 4 only", "1, 2, 3 and 4"],
                answer: "1, 2, 3 and 4",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the maximum number of reduce moves that can be taken by a bottom-up parser for a grammar with no epsilon and unit productions (i.e., of type A → ε and A → a) to parse a string with n tokens?",
                options: ["n/2", "n – 1", "2n – 1", "2n"],
                answer: "n – 1",
            },
            {
                id: 14,
                type: "mcq",
                question: "The grammar S → aSa | bS | c is",
                options: [
                    "LL(1) but not LR(1)",
                    "LR(1) but not LL(1)",
                    "Both LL(1) and LR(1)",
                    "Neither LL(1) nor LR(1)",
                ],
                answer: "LR(1) but not LL(1)",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "An LALR(1) parser for a grammar G can have shift-reduce (S-R) conflicts if and only if",
                options: [
                    "The SLR(1) parser for G has S-R conflict",
                    "The LR(1) parser for G has S-R conflicts",
                    "The LR(0) parser for G has S-R conflicts",
                    "The LALR(1) parser for G has reduce-reduce conflicts",
                ],
                answer: "The LR(1) parser for G has S-R conflicts",
            },
        ],
        10: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following describes a handle (as applicable to LR-parsing) appropriately?",
                options: [
                    "It is the position in a sentential form where the next shift or reduce operation will occur.",
                    "It is non-terminal whose production will be used for reduction in the next step.",
                    "It is a production that may be used for reduction in a future step along with a position in the sentential form where the next shift or reduce operation will occur.",
                    "It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right-hand side of the production may be found.",
                ],
                answer: "It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right-hand side of the production may be found.",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider the augmented grammar given below:\nS’ → S\nS → <L> | id\nL → L, S | S\nLet I0 = CLOSURE({[S’ → •S]}). The number of items in the set GOTO(I0, <) is: _____ .",
                answer: "4",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the grammar defined by the following production rules, with two operators * and +:\nS → T * P\nT → U | T * U\nP → Q + P | Q\nQ → Id\nU → Id\nWhich one of the following is TRUE?",
                options: [
                    "+ is left associative, while * is right associative",
                    "+ is right associative, while * is left associative",
                    "Both + and * are right associative",
                    "Both + and * are left associative",
                ],
                answer: "+ is right associative, while * is left associative",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "The attributes of three arithmetic operators in some programming language are given below:\nOperator | Precedence | Associativity | Arity\n* | High | Left | Binary\n– | Medium | Right | Binary\n- | Low | Left | Binary\nThe value of the expression 2 – 5 + 1 – 7 * 3 in this language is _____.",
                answer: "-19",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the following grammar and the associated syntax directed translation (SDT) actions:\nP → D* E*\nD → int ID {record that ID, lexeme is of type int}\nD → bool ID {record that ID, lexeme is of type bool}\nE → E1 + E2 {check that E1.type = E2.type = int; set E.type := int}\nE → ! E1 {check that E1.type = bool; set E.type := bool}\nE → ID {set E.type := int}\nWith respect to the above grammar, which one of the following choices is correct?",
                options: [
                    "The actions can be used to correctly type-check any syntactically correct program",
                    "The actions can be used to type-check syntactically correct integer variable declarations and integer expressions",
                    "The actions can be used to type-check syntactically correct boolean variable declarations and boolean expressions",
                    "The actions will lead to an infinite loop",
                ],
                answer: "The actions can be used to type-check syntactically correct integer variable declarations and integer expressions",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example:\nint a[10][3];\nThe grammars use D as the start symbol, and use six terminal symbols int; id [] num.\nGrammar G1:\nD → int L;\nL → id [ E L → id E\nE → num ] E → E [ num ]\nE → num ][ E E → [ num ]\nWhich of the grammars correctly generate the declaration mentioned above?",
                options: [
                    "Both G1 and G2",
                    "Only G1",
                    "Only G2",
                    "Neither G1 nor G2",
                ],
                answer: "Only G1",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "Consider the syntax directed translation given by the following grammar and semantic rules. Here N, I, F and B are non-terminals. N is the starting non-terminal, and #, 0 and 1 are lexical tokens corresponding to input letters “#”, “0” and “1”, respectively. X.val denotes the synthesized attribute (a numeric value) associated with a non-terminal X.\nI1 and F1 denote occurrences of I and F on the right hand side of a production, respectively. For the tokens 0 and 1, 0.val = 0 and 1.val = 1.\nN → I#F  N.val = I.val + F.val\nI → I1 1 B  I.val = (2 * I1.val) + B.val\nI → B  I.val = B.val\nF → B F1  F.val = ½ (B.val + F1.val)\nF → B  F.val = ½ B.val\nB → 0  B.val = 0.val\nB → 1  B.val = 1.val\nThe value computed by the translation scheme for the input string 10#011 is _____ (rounded off to three decimal places).",
                answer: "3.125",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider the following grammar along with translation rules.\nS → S1 # T {S.val = S1.val * T.val}\nS → T {S.val = T.val}\nT → T1 % R {T.val = T1.val ÷ R.val}\nT → R {T.val = R.val}\nR → id {R.val = id.val}\nHere # and % are operators and id is a token that represents an integer and id.val represents the corresponding integer value. Using this translation scheme, the computed value of S.val for the root of the parse tree for the expression 20#10%5#8%2%2 is _____.",
                answer: "8",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the productions A → PQ and A → XY. Each of the five non-terminals A, P, Q, X, and Y has two attributes: s is a synthesized attribute, and i is an inherited attribute. Consider the following rules:\nRule 1: P.i = A.i + 2, Q.i = P.i + A.i and A.s = P.s + Q.s\nRule 2: X.i = A.i + Y.s and Y.i = X.s + A.i\nWhich one of the following is TRUE?",
                options: [
                    "Neither Rule 1 nor Rule 2 is L-attributed",
                    "Only Rule 1 is L-attributed",
                    "Both Rule 1 and Rule 2 are L-attributed",
                    "Only Rule 2 is L-attributed",
                ],
                answer: "Only Rule 1 is L-attributed",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the following grammar and the semantic actions to support the inherited type declaration attributes. Let X1, X2, X3, X4, X5, and X6 be placeholders for the non-terminals D, T, L, or L1 in the following table:\n\n| Production rule | Semantic action                               |\n| --------------- | --------------------------------------------- |\n| D → T L         | X1.type = X2.type                             |\n| T → int         | T.type = int                                  |\n| T → float       | T.type = float                                |\n| L → L1 , id     | X3.type = X4.type; addType(id.entry, X5.type) |\n| L → id          | addType(id.entry, X6.type)                    |\n\nWhich one of the following is the appropriate choice for X1, X2, X3, and X4?",
                options: [
                    "X1 = L, X2 = T, X3 = L1, X4 = L",
                    "X1 = T, X2 = L, X3 = L1, X4 = T",
                    "X1 = L, X2 = L, X3 = L1, X4 = T",
                    "X1 = T, X2 = L, X3 = T, X4 = L1",
                ],
                answer: "X1 = D, X2 = T, X3 = L, X4 = L", // Actually, the original question's placeholders don't exactly fit — correction below.
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the following parse tree for the expression a # b $ c $ d # e # f involving two binary operators $ and #:\nWhich one of the following is correct for the given parse tree?",
                options: [
                    "$ has higher precedence and is left associative; # is right associative",
                    "# has higher precedence and is left associative; $ is right associative",
                    "$ has higher precedence and is left associative; # is left associative",
                    "# has higher precedence and is right associative; $ is left associative",
                ],
                answer: "$ has higher precedence and is left associative; # is left associative",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Which one of the following translations cannot be implemented by an S-attributed definition?",
                options: [
                    "Type-checking",
                    "Conversion of an expression from infix to postfix notation",
                    "Detection of left recursion",
                    "Calculation of the height of a syntax tree",
                ],
                answer: "Detection of left recursion",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Consider the following grammar:\nS → a S c | b c | d\nWhich one of the following is TRUE?",
                options: [
                    "The grammar is ambiguous",
                    "The grammar is not ambiguous",
                    "The grammar is left recursive",
                    "The grammar is not context-free",
                ],
                answer: "The grammar is ambiguous",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which one of the following is TRUE for the following grammar:\nS → S ( S ) S | ε",
                options: [
                    "The grammar is ambiguous",
                    "The grammar is not ambiguous",
                    "The grammar is left recursive",
                    "The grammar is not context-free",
                ],
                answer: "The grammar is ambiguous",
            },
            {
                id: 15,
                type: "mcq",
                question: "Which of the following grammars are ambiguous?",
                options: [
                    "S → S S + | a + | a",
                    "S → S + S + | a + | a",
                    "S → S S + | a | a +",
                    "S → S + S + | a | a +",
                ],
                answer: "S → S S + | a + | a",
            },
        ],

        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the following statements regarding the front-end and back-end of a compiler:\nS1: The front-end includes phases that are independent of the target hardware.\nS2: The back-end includes phases that are specific to the target hardware.\nS3: The back-end includes phases that are specific to the programming language used in the source code.\nIdentify the CORRECT option.",
                options: [
                    "Only S1 is TRUE",
                    "Only S1 and S2 are TRUE",
                    "S1, S2, and S3 are all TRUE",
                    "Only S1 and S3 are TRUE",
                ],
                answer: "Only S1 and S2 are TRUE",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider the following ANSI C program:\nint main() {\n    Integer x;\n    return ();\n}\nWhich one of the following phases in a seven-phase C compiler will throw an error?",
                options: [
                    "Lexical analyzer",
                    "Syntax analyzer",
                    "Semantic analyzer",
                    "Machine dependent optimizer",
                ],
                answer: "Semantic analyzer",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Match the following according to input from List-I to the compiler phase in the List-II that processes it:\nList-I\n(P) Syntax tree\n(Q) Character stream\n(R) Intermediate representation\n(S) Token stream\nList-II\n(i) Code generator\n(ii) Syntax analyser\n(iii) Semantic analyser\n(iv) Lexical analyser",
                options: [
                    "P → (ii), Q → (iii), R → (iv), S → (i)",
                    "P → (ii), Q → (i), R → (iii), S → (iv)",
                    "P → (iii), Q → (iv), R → (i), S → (ii)",
                    "P → (i), Q → (iv), R → (ii), S → (iii)",
                ],
                answer: "P → (iii), Q → (iv), R → (i), S → (ii)",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Match the following\nList-I\nP: Lexical analysis\nQ: Top down parsing\nR: Semantic analysis\nS: Runtime environment\nList-II\n(i) Leftmost derivation\n(ii) Type checking\n(iii) Regular expressions\n(iv) Activation records",
                options: [
                    "P → (i), Q → (ii), R → (iv), S → (iii)",
                    "P → (iii), Q → (i), R → (ii), S → (iv)",
                    "P → (ii), Q → (iii), R → (i), S → (iv)",
                    "P → (iv), Q → (i), R → (ii), S → (iii)",
                ],
                answer: "P → (iii), Q → (i), R → (ii), S → (iv)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "In a compiler, keywords of a language are recognized during",
                options: [
                    "parsing of the program",
                    "the code generation",
                    "the lexical analysis of the program",
                    "dataflow analysis",
                ],
                answer: "the lexical analysis of the program",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which data structure in a compiler is used for managing information about variables and their attributes?",
                options: [
                    "Abstract syntax tree",
                    "Symbol table",
                    "Semantic stack",
                    "Parse table",
                ],
                answer: "Symbol table",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The lexical analysis for a modern computer language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",
                options: [
                    "Finite state automata",
                    "Deterministic pushdown automata",
                    "Non-deterministic pushdown automata",
                    "Turing Machine",
                ],
                answer: "Finite state automata",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A lexical analyzer uses the following patterns to recognize three tokens T1, T2 and T3 over the alphabet {a, b, c}.\nT1: a ? (b│c)* a\nT2: b ? (a│c)* b\nT3: c ? (b│a)* c\nIf the string bbaacabc is processed by the analyzer, which one of the following is the sequence of tokens it outputs?",
                options: ["T1 T2 T3", "T1 T1 T3", "T2 T1 T3", "T3 T3"],
                answer: "T3 T3",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the following expression grammar G:\nE → E − T | T\nT → T + F | F\nF → (E) | id\nWhich of the following grammars is not left recursive, but is equivalent to G?",
                options: [
                    "E → E−T | T, T → T+F | F, F → (E) | id",
                    "E → TE′, E' → −TE′| ε, T → T+F | F",
                    "E → TX, X → −TX | ε, T → FY, Y → +FY | ε, F → (E) | id",
                    "E → TX | (TX), X → −TX | +TX | ε, T → id",
                ],
                answer: "E → TX, X → −TX | ε, T → FY, Y → +FY | ε, F → (E) | id",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the following context-free grammar where the set of terminals is {a, b, c, d, f}\nS → d a T | R f\nT → a S | b a T | ε\nR → c a T R | ε\nWhich one of the following choices represents the correct combinations for the numbered cells in the parsing table?",
                options: [
                    "(1) S → R f (2) S → R f (3) T → ε (4) T → ε",
                    "(1) blank (2) S → R f (3) T → ε (4) T → ε",
                    "(1) S → R f (2) blank (3) blank (4) T → ε",
                    "(1) blank (2) S → R f (3) blank (4) blank",
                ],
                answer: "(1) blank (2) S → R f (3) T → ε (4) T → ε",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider the grammar given below:\nS → Aa\nA → BD\nB → b | ε\nD → d | ε\nLet a, b, d, and $ be index as follows: {a:3, b:2, d:1, $:0}. Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in descending order.",
                answer: "31",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the following grammar:\nP → xQRS\nQ → yz | z\nR → w | ε\nS → y\nWhat is FOLLOW(Q)?",
                options: ["{R}", "{w}", "{w,y}", "{w,$}"],
                answer: "{w,y}",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "For the grammar below, the FIRST and FOLLOW sets for the non-terminals A and B are:\nS → aAbB | bAaB | ε\nA → S\nB → S",
                options: [
                    "FIRST (A)={a, b, ε}=FIRST (B), FOLLOW (A)={a, b}, FOLLOW (B)={a, b, $}",
                    "FIRST (A)={a, b, $}, FIRST (B)={a, b, ε}, FOLLOW (A)={a,b}, FOLLOW (B)={$}",
                    "FIRST (A)={a, b, ε}=FIRST (B), FOLLOW (A)={a,b}, FOLLOW (B)=$",
                    "FIRST (A)={a,b}=FIRST (B), FOLLOW (A)={a, b}, FOLLOW (B)={a, b}",
                ],
                answer: "FIRST (A)={a, b, ε}=FIRST (B), FOLLOW (A)={a,b}, FOLLOW (B)=$",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "For the grammar S → aAbB | bAaB | ε, A → S, B → S, the appropriate entries for E1, E2 and E3 in the LL(1) parsing table are:",
                options: [
                    "E1: S → aAbB, A → S; E2: S → bAaB, B → S; E3: B → S",
                    "E1: S → aAbB, S → ε; E2: S → bAaB, S → ε; E3: S → ε",
                    "E1: S → aAbB, S → ε; E2: S → bAaB, S → ε; E3: B → S",
                    "E1: A → S, S → ε; E2: B → S, S → ε; E3: B → S",
                ],
                answer: "E1: S → aAbB, S → ε; E2: S → bAaB, S → ε; E3: B → S",
            },
            {
                id: 4,
                type: "mcq",
                question: "Which one of the following statements is TRUE?",
                options: [
                    "The LALR(1) parser for a grammar G cannot have reduce – reduce conflict if the LR(1) parser for G does not have reduce – reduce conflict.",
                    "Symbol table is accessed only during the lexical analysis phase.",
                    "Data flow analysis is necessary for run-time memory management.",
                    "LR(1) parsing is sufficient for deterministic context – free languages.",
                ],
                answer: "LR(1) parsing is sufficient for deterministic context – free languages.",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Consider the augmented grammar with {+, ∗ , (,), id} as the set of terminals.\nS′→ S\nS → S + R | R\nR → R ∗ P | P\nP → (S) | id\nIf I0 is the set of two LR(0) items {[S→S.], [S →S. + R]}, then goto(closure(I0), +) contains exactly ______ items.",
                answer: "5",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the following statements\nS1: Every SLR (1) grammar is unambiguous but there are certain unambiguous grammars that are not SLR(1).\nS2: For any context-free grammar, there is a parser that takes at most O(n^3) time to parse a string of length n.",
                options: [
                    "S1 is true and S2 is false",
                    "S1 is false and S2 is true",
                    "S1 is true and S2 is true",
                    "S1 is false and S2 is false",
                ],
                answer: "S1 is true and S2 is true",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "Consider the augmented grammar with {#, @,<, >,a, b, c} as the set of terminals\nS′→S, S→S#cS, S→SS, S→S@, S→<S>, S→a, S→b, S→c\nLet I0 = CLOSURE({S′→'.'S}). The number of items in the set GOTO(GOTO(I0,<),<) is _______",
                answer: "8",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider the following grammar:\nS → aSB | d\nB → b\nThe number of reduction steps taken by a bottom-up parser while accepting the string aaadbbb is ______.",
                answer: "7",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which one of the following kinds of derivation is used by LR parsers?",
                options: [
                    "Leftmost",
                    "Leftmost in reverse",
                    "Rightmost",
                    "Rightmost in reverse",
                ],
                answer: "Rightmost in reverse",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following statements about parser is/are CORRECT?\nI. Canonical LR is more powerful than SLR.\nII. SLR is more powerful than LALR.\nIII. SLR is more powerful than Canonical LR.",
                options: ["I only", "II only", "III only", "II and III only"],
                answer: "I only",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the following grammar G.\nS → F | H\nF → p | c\nH → d | c\nWhere S, F and H are non-terminal symbols, p, d and c are terminal symbols. Which of the following statements(s) is/are correct?\nS1: LL(1) can parse all strings that are generated using grammar G.\nS2: LR(1) can parse all strings that are generated using grammar G.",
                options: [
                    "Only S1",
                    "Only S2",
                    "Both S1 and S2",
                    "Neither S1 and S2",
                ],
                answer: "Only S2",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Among simple LR (SLR), canonical LR, and look-ahead LR (LALR), which of the following pairs identify the method that is very easy to implement and the method that is the most powerful, in that order?",
                options: [
                    "SLR, LALR",
                    "Canonical LR, LALR",
                    "SLR, canonical LR",
                    "LALR, canonical LR",
                ],
                answer: "SLR, canonical LR",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which one of the following is TRUE at any valid state in shift-reduce parsing?",
                options: [
                    "Viable prefixes appear only at the bottom of the stack and not inside",
                    "Viable prefixes appear only at the top of the stack and not inside",
                    "The stack contains only a set of viable prefixes",
                    "The stack never contains viable prefixes",
                ],
                answer: "The stack contains only a set of viable prefixes",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "A canonical set of items is given below\nS → L. > R\nQ → R.\nOn input symbol > the set has",
                options: [
                    "a shift-reduce conflict and a reduce-reduce conflict.",
                    "a shift-reduce conflict but not a reduce-reduce conflict.",
                    "a reduce-reduce conflict but not a shift-reduce conflict.",
                    "neither a shift-reduce nor a reduce-reduce conflict.",
                ],
                answer: "a shift-reduce conflict but not a reduce-reduce conflict.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the following two sets of LR(1) items of LR(1) grammar.\nWhich of the following statement related to merging of the two sets in the corresponding LALR parser is/are FALSE?",
                options: [
                    "Cannot be merged since look aheads are different.",
                    "Can be merged but will result in S-R conflict.",
                    "Can be merged but will result in R-R conflict.",
                    "Cannot be merged since goto on c will lead to two different sets",
                ],
                answer: "Cannot be merged since look aheads are different.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "What is the maximum number of reduces moves that can be taken by a bottom up parser for a grammar with no epsilon and unit productions (i.e. of type A→ε and A→a) to parse a string with n tokens?",
                options: ["n/2", "n-1", "2n-1", "2^n"],
                answer: "n-1",
            },
            {
                id: 6,
                type: "mcq",
                question: "The grammar S → aSa | bS | c is",
                options: [
                    "LL(1) but not LR(1)",
                    "LR(1) but not LL(1)",
                    "Both LL(1) and LR(1)",
                    "Neither LL(1) nor LR(1)",
                ],
                answer: "LR(1) but not LL(1)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "An LALR(1) parser for a grammar G can have shift-reduce (S-R) conflicts if and only if",
                options: [
                    "The SLR(1) parser for G has S-R conflict",
                    "The LR(1) parser for G has S-R conflicts",
                    "The LR(0) parser for G has S-R conflicts",
                    "The LALR(1) parser for G has reduce-reduce conflicts",
                ],
                answer: "The LR(0) parser for G has S-R conflicts",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following describes a handle (as applicable to LR-parsing) appropriately?",
                options: [
                    "It is the position in a sentential form where the next shift or reduce operation will occur.",
                    "It is non-terminal whose production will be used for reduction in the next step",
                    "It is a production that may be used for reduction in a future step along with a position in the sentential form where the next shift or reduce operation will occur.",
                    "It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right-hand side of the production may be found.",
                ],
                answer: "It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right-hand side of the production may be found.",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider the augmented grammar given below:\nS' -> S\nS -> <L> | id\nL -> L, S | S\nLet I0 = CLOSURE ({[S’ -> .S]}). The number of items in the set GOTO (I0, <) is: _________.",
                answer: "5",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the grammar defined by the following production rules, with two operator * and +\nS → T * P\nT → U | T * U\nP → Q + P | Q\nQ → Id\nU → Id\nWhich one of the following is TRUE?",
                options: [
                    "+ is left associative, while * is right associative",
                    "+ is right associative, while * is left associative",
                    "Both + and * are right associative",
                    "Both + and * are left associative",
                ],
                answer: "+ is right associative, while * is left associative",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the following grammar (that admits a series of declarations, followed by expressions) and the associated syntax directed translation (SDT) actions, given as pseudo-code:\nP → D* E*\nD → int ID {record that ID, lexeme is of type int}\n...\nWith respect to the above grammar, which one of the following choices is correct?",
                options: [
                    "The actions can be used to correctly type-check any syntactically correct program",
                    "The actions can be used to type-check syntactically correct integer variable declarations and integer expressions",
                    "The actions can be used to type-check syntactically correct boolean variable declarations and boolean expressions",
                    "The actions will lead to an infinite loop",
                ],
                answer: "The actions can be used to type-check syntactically correct integer variable declarations and integer expressions",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example, int a[10][3]; ... Which of the grammars correctly generate the declaration mentioned above?",
                options: [
                    "Both G1 and G2",
                    "Only G1",
                    "Only G2",
                    "Neither G1 nor G2",
                ],
                answer: "Both G1 and G2",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider the syntax directed translation given by the following grammar and semantic rules... The value computed by the translation scheme for the input string 10 # 011 is ______.(Rounded off to three decimal places)",
                answer: "2.375",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the following grammar along with translation rules... Using this translation scheme, the computed value of S.val for root of the parse tree for the expression 20 #10%5#8%2%2 is _________.",
                answer: "80",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the productions A -> PQ and A -> XY. Each of the five non-terminals A, P, Q, X and Y has two attributes: s is a synthesized attribute, and i is an inherited attribute. Consider the following rules.\nRule 1: P.i = A.i+2, Q.i = P.i + A.i and A.s = P.s + Q.s\nRule 2: X.i = A.i + Y.s and Y.i = X.s + A.i\nWhich one of the following is TRUE?",
                options: [
                    "Neither Rule 1 nor Rule 2 is L-attributed.",
                    "Only Rule 1 is L-attributed.",
                    "Both Rule 1 and Rule 2 are L-attributed.",
                    "Only Rule 2 is L-attributed.",
                ],
                answer: "Only Rule 1 is L-attributed.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the following grammar and the semantic actions to support the inherited type declaration attributes. Let X1, X2, X3. X4, X5, and X6 be the placeholders... Which one of the following are the appropriate choice for X1, X2, X3 and X4?",
                options: [
                    "X1=L, X2=T, X3=L1, X4=L",
                    "X1=T, X2=L, X3=L1, X4=T",
                    "X1=L, X2=L, X3=L1, X4=T",
                    "X1=T, X2=L, X3=T, X4=L1",
                ],
                answer: "X1=L, X2=T, X3=L1, X4=L",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the following parse tree for the expression a#b$c$d#e#f, involving two binary operators $ and #.\nWhich one of the following is correct for the given parse tree?",
                options: [
                    "$ has higher precedence and is left associative; # is right associative",
                    "# has higher precedence and is left associative; $ is right associative",
                    "$ has higher precedence and is left associative; # is left associative",
                    "# has higher precedence and is right associative; $ is left associative",
                ],
                answer: "$ has higher precedence and is left associative; # is right associative",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the following Syntax Directed Translation Scheme (SDTS), with non-terminals {S, A} and terminals {a, b}.\nS → aA {print 1}\nS → a {print 2}\nA → Sb {print 3}\nUsing the above SDTS, the output printed by a bottom-up parser, for the input aab is:",
                options: ["132", "223", "231", "Syntax error"],
                answer: "231",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "One of the purposes of using intermediate code in compilers is to",
                options: [
                    "make parsing and semantic analysis simpler.",
                    "improve error recovery and error reporting.",
                    "increase the chances of reusing the machine-independent code optimizer in other compilers",
                    "improve the register allocation.",
                ],
                answer: "increase the chances of reusing the machine-independent code optimizer in other compilers",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider the expression tree shown. Each leaf represents a numerical value, which can either be 0 or 1. Over all possible choices of the values at the leaves, the maximum possible value of the expression represented by the tree is ________.",
                answer: "6",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider two binary operators '↑' and '↓' with the precedence of operator ↓ being lower than that of the operator ↑. Operator ↑ is right associative while operator ↓ is left associative. Which one of the following represents the parse tree for expression (7 ↓ 3 ↑ 4 ↑ 3 ↓ 2)",
                options: ["(a)", "(b)", "(c)", "(d)"],
                answer: "(b)",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "In the context of compilers, which of the following is/are NOT an intermediate representation of the source program?",
                options: [
                    "Three address code",
                    "Abstract Syntax Tree (AST)",
                    "Control Flow Graph (CFG)",
                    "Symbol table",
                ],
                answer: "Symbol table",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider the expression (a-1)*(((b+c)/3)+d). Let X be the minimum number of registers required by an optimal code generation (without any register spill) algorithm for a load/store architecture... The value of X is______.",
                answer: "2",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider the following intermediate program in three address code\np = a – b\nq = p * c\np = u * v\nq = p + q\nWhich one of the following corresponds to a static single assignment form of the above code?",
                options: [
                    "p1 = a-b; q1 = p1*c; p1 = u*v; q1 = p1 + q1",
                    "p3 = a-b; q4 = p3*c; p4 = u*v; q5 = p4 + q4",
                    "p1 = a-b; q1 = p2*c; p3 = u*v; q2 = p4 + q3",
                    "p1 = a-b; q1 = p*c; q2 = u*v; q2 = p + q",
                ],
                answer: "p3 = a-b; q4 = p3*c; p4 = u*v; q5 = p4 + q4",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the following code segment.\nx = u − t;\ny = x ∗ v;\nx = y + w;\ny = t − z;\ny = x ∗ y;\nThe minimum number of total variables required to convert the above code segment to static single assignment form is ______.",
                answer: "10",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "For a C program accessing X[i][j][k], the following intermediate code is generated by a compiler. Assume that the size of an integer is 32 bits and the size of a character is 8 bits.\nt0 = i∗1024, t1 = j∗32, t2 = k∗4, t3 = t1+t0, t4 = t3+t2, t5 = X[t4]\nWhich one of the following statements about the source code for the C program is CORRECT?",
                options: [
                    "X is declared as 'int X[32][32][8]'",
                    "X is declared as 'X[4][1024][32]'",
                    "X is declared as 'char X[4][32][8]'",
                    "X is declared as 'char X[32][16][2]'",
                ],
                answer: "X is declared as 'int X[32][32][8]'",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "The least number of temporary variables required to create a three-address code in static single assignment form for the expression q+r/3+s−t∗5+u∗v/w is _______.",
                answer: "8",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "For a statement S in a program, in the context of liveness analysis, the following sets are defined... Consider a basic block that consists of two statements, S1 followed by S2. Which one of the following statements is correct?",
                options: [
                    "OUT(S1) = IN(S2)",
                    "OUT(S1) = IN(S1) ∪ USE(S1)",
                    "OUT(S1) = IN(S2) ∪ OUT(S2)",
                    "OUT(S1) = USE(S1) ∪ IN(S2)",
                ],
                answer: "OUT(S1) = IN(S2)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the following ANSI C code segment:\nz = x + 3 + y →f1 + y → f2;\n... The number of addition and dereference operations (of the form y → f1 or y → f2) in the optimized code, respectively, are:",
                options: [
                    "403 and 102",
                    "203 and 2",
                    "303 and 102",
                    "303 and 2",
                ],
                answer: "303 and 2",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following statements are TRUE?\nI: There exist parsing algorithms for some programming languages whose complexities are less than θ(n^3).\nIV: Code improving transformations can be performed at both source language and intermediate code level.",
                options: [
                    "I and II",
                    "I and IV",
                    "III and IV",
                    "I, III and IV",
                ],
                answer: "I and IV",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "The variables which are live both at the statement in basic block 2 and at the statement in basic block 3 of the above control flow graph are:",
                options: ["p, s, u", "r, s, u", "r, u", "q, v"],
                answer: "r, u",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the basic block given below.\na = b + c; c = a + d; d = b + c; e = d - b; a = e + b\nThe minimum number of nodes and edges present in the DAG representation of the above basic block respectively are",
                options: ["6 and 6", "8 and 10", "9 and 12", "4 and 4"],
                answer: "6 and 6",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question: "Which one of the following is FALSE?",
                options: [
                    "A basic block is a sequence of instructions where control enters the sequence at the beginning and exits at the end.",
                    "Available expression analysis can be used for common subexpression elimination.",
                    "Live variable analysis can be used for dead code elimination.",
                    "x = 4 * 5 => x = 20 is an example of common subexpression elimination.",
                ],
                answer: "x = 4 * 5 => x = 20 is an example of common subexpression elimination.",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "The minimum number of arithmetic operations required to evaluate the polynomial P(X) = X^5 + 4X^3 + 6X + 5 for a given value of X, using only one temporary variable is_________.",
                answer: "7",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Suppose the instruction set architecture of the processor has only two registers. The only allowed compiler optimization is code motion... What is the minimum number of spills to memory in the compiled code?",
                options: ["0", "1", "2", "3"],
                answer: "1",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "What is the minimum number of registers needed in the instruction set architecture of the processor to compile this code segment without any spill to memory? Do not apply any optimization other than optimizing register allocation.",
                options: ["3", "4", "5", "6"],
                answer: "4",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider evaluating the following expression tree on a machine with load-store architecture... what is the minimum number of registers needed to evaluate this expression?",
                options: ["2", "9", "5", "3"],
                answer: "3",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Some code optimizations are carried out on the intermediate code because",
                options: [
                    "They enhance the portability of the compiler to the target processors",
                    "Program analysis is more accurate on intermediate code than on machine code",
                    "The information from data flow analysis cannot otherwise be used for optimization",
                    "The information from the front end cannot otherwise be used for optimization",
                ],
                answer: "They enhance the portability of the compiler to the target processors",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the control flow graph shown. Which one of the following choices lists the set of live variable at the exit point of each basic block?",
                options: [
                    "B1: { }, B2: {a}, B3: {a}, B4: {a}",
                    "B1: {i, j}, B2: {a}, B3: {a}, B4: {i}",
                    "B1: { a, i, j }, B2: {a, i , j}, B3: {a, i}, B4: {a}",
                    "B1: { a, i , j }, B2: {a, j}, B3: {a, j}, B4: {a, i, j}",
                ],
                answer: "B1: { a, i , j }, B2: {a, j}, B3: {a, j}, B4: {a, i, j}",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider the following C code segment: a = b + c; e = a + 1; d = b + c; f = d + 1; g = e + f; In a compiler, this code segment is represented internally as a directed acyclic graph (DAG). The number of nodes in the DAG is _______.",
                answer: "6",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider a program P following the grammar: Stmt -> if expr then expr else expr; stmt | ε ... containing ten if terminals. The number of control flow paths in P is ______.",
                answer: "1024",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the intermediate code given below... The number of nodes and edges in the control-flow graph constructed for the above code, respectively, are",
                options: ["5 and 7", "6 and 7", "5 and 5", "7 and 8"],
                answer: "6 and 7",
            },
        ],
        7: [
            {
                id: 1,
                type: "mcq",
                question:
                    "In the context of abstract-syntax-tree (AST) and control-flow-graph (CFG), which one of the following is True?",
                options: [
                    "In both AST and CFG, let node N2 be the successor of node N1. In the input program, the code corresponding to N2 is present after the code corresponding to N1",
                    "For any input program, neither AST nor CFG will contain a cycle.",
                    "The maximum number of successors of a node in an AST and a CFG depends on the input program.",
                    "Each node in AST and CFG corresponds to at most one statement in the input program.",
                ],
                answer: "The maximum number of successors of a node in an AST and a CFG depends on the input program.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Match all items in Group 1 with correct options from those given in Group 2.\nGroup 1: P: Regular expression, Q: Pushdown automata, R: Dataflow analysis, S: Register allocation\nGroup 2: 1. Syntax analysis, 2. Code generation, 3. Lexical analysis, 4. Code optimization",
                options: [
                    "P-4, Q-1, R-2, S-3",
                    "P-3, Q-1, R-4, S-2",
                    "P-3, Q-4, R-1, S-2",
                    "P-2, Q-1, R-4, S-3",
                ],
                answer: "P-3, Q-1, R-4, S-2",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the following statements:\nI. Symbol table is accessed only during lexical analysis and syntax analysis.\nII. Compilers for programming languages that support recursion necessarily need heap storage for memory allocation in the run-time environment.\nIII. Errors violating the condition ‘any variable must be declared before its use’ are detected during syntax analysis.\nWhich of the above statements is/are TRUE?",
                options: [
                    "I only",
                    "I and III only",
                    "II only",
                    "None of I, II and III",
                ],
                answer: "None of I, II and III",
            },
            {
                id: 4,
                type: "mcq",
                question: "Which one of the following statements is FALSE?",
                options: [
                    "Context-free grammar can be used to specify both lexical and syntax rules.",
                    "Type checking is done before parsing.",
                    "High-level language programs can be translated to different Intermediate Representations.",
                    "Arguments to a function can be passed using the program stack",
                ],
                answer: "Type checking is done before parsing.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Match the following:\nList-I\na. Lexical analysis\nb. Parsing\nc. Register allocation\nd. Expression evaluation\nList-II\n1. Graph coloring\n2. DFA minimization\n3. Post-order traversal\n4. Production tree",
                options: [
                    "a. 2, b. 3, c. 1, d. 4",
                    "a. 2, b. 1, c. 4, d. 3",
                    "a. 2, b. 4, c. 1, d. 3",
                    "a. 2, b. 3, c. 4, d. 1",
                ],
                answer: "a. 2, b. 4, c. 1, d. 3",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following are true?\nI. A programming language which does not permit global variables of any kind and has no nesting of procedures/functions, but permits recursion can be implemented with static storage allocation.\nII. Multi-level access link (or display) arrangement is needed to arrange activation records only if the programming language being implemented has nesting of procedures/functions\nV. Programming languages which permit a function to return a function as its result cannot be implemented with a stack-based storage allocation scheme for activation records",
                options: [
                    "II and V only",
                    "I, II and IV only",
                    "I, II and V only",
                    "I, III and V only",
                ],
                answer: "I, II and V only",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which of the following statements are CORRECT?\n1. Static allocation of all data areas by a compiler makes it impossible to implement recursion.\n2. Automatic garbage collection is essential to implement recursion.\n3. Dynamic allocation of activation records is essential to implement recursion.\n4. Both heap and stack are essential to implement recursion.",
                options: [
                    "1 and 2 only",
                    "2 and 3 only",
                    "3 and 4 only",
                    "1 and 3 only",
                ],
                answer: "1 and 3 only",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which one of the following is NOT performed during compilation?",
                options: [
                    "Dynamic memory allocation",
                    "Type checking",
                    "Symbol table management",
                    "Inline expansion",
                ],
                answer: "Dynamic memory allocation",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which languages necessarily need heap allocation in the runtime environment?",
                options: [
                    "Those that support recursion",
                    "Those that use dynamic scoping",
                    "Those that allow dynamic data structure",
                    "Those that use global variables",
                ],
                answer: "Those that allow dynamic data structure",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the program given below, in a block-structured pseudo-language with lexical scoping and nesting of procedures permitted. Consider the calling chain: Main → A1 → A2 → A21 → A1. The correct set of activation records along with their access links is given by:",
                options: ["(a)", "(b)", "(c)", "(d)"],
                answer: "(d)",
            },
        ],
    },
    3: {
        //coa

        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the IEEE-754 single precision floating point numbers P = 0xC1800000 and Q = 0x3F5C2EF4. Which one of the following corresponds to the product P × Q, represented in the IEEE-754 single precision format?",
                options: [
                    "0x404C2EF4",
                    "0x405C2EF4",
                    "0xC15C2EF4",
                    "0xC14C2EF4",
                ],
                answer: "0xC15C2EF4",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The value of a float type variable is represented using the single-precision 32-bit IEEE-754 format. A float variable X is assigned the decimal value of −14.25. The representation of X in hexadecimal notation is:",
                options: ["C1640000H", "416C0000H", "41640000H", "C16C0000H"],
                answer: "C1640000H",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "The amount of ROM needed to implement a 4-bit multiplier is:",
                options: ["64 bits", "128 bits", "1Kbits", "2 Kbits"],
                answer: "2 Kbits",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A program uses six temporary variables a, b, c, d, e, f. Assuming all operations take operands from registers, what is the minimum number of registers needed to execute this program without spilling? The program is: a=1; b=10; c=20; d=a+b; e=c+d; f=c+e; b=c+e; e=b+f; d=5+e; return d+f;",
                options: ["2", "3", "4", "6"],
                answer: "3",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "A processor performs addition of two 2’s complement numbers 01001101 and 11101001. After the execution, the status of the carry, overflow, and sign flags, respectively will be:",
                options: ["1, 1, 0", "1, 0, 0", "0, 1, 0", "1, 0, 1"],
                answer: "1, 0, 0",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The use of multiple register windows with overlap causes a reduction in the number of memory accesses for:",
                options: [
                    "function locals and parameters",
                    "register saves and restores",
                    "instruction fetches",
                    "1, 2 and 3",
                ],
                answer: "function locals and parameters",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The chip select logic for a DRAM chip in a memory system design is shown. The memory system has 16-address lines (A15-A0). What is the range of addresses (in hex) of the memory system that can get enabled by the chip select (CS) signal?",
                options: [
                    "C800 to CFFF",
                    "CA00 to CAFF",
                    "C800 to C8FF",
                    "DA00 to DFFF",
                ],
                answer: "C800 to CFFF",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider the given C-code and its corresponding assembly code. Which of the following options is a correct replacement for operands in the position (U1, U2, U3, U4) in the assembly code?\n//C-code\nint a[10],b[10],i;\nfor(i=0;i<10;i++) a[i]=b[i]*8;\n//Assembly\nL02: lw r5, 0(r4) ;r5<-Memory[r4+0]\nL03: shl r5, r5, U1 ;r5<-r5<<U1\nL05: add r3, r3, U2 ;r3<-r3+U2\nL06: add r4, r4, U3\nL08: jmp U4",
                options: [
                    "(8, 4, 1, L02)",
                    "(3, 4, 4, L01)",
                    "(8, 1, 1, L02)",
                    "(3, 1, 1, L01)",
                ],
                answer: "(3, 4, 4, L01)",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider an instruction sequence. Assume memory location 5000 has 10, and register R3 has 3000. Memory locations 3000-3010 each have 50. The sequence starts at location 1000. After execution, what is the content of memory location 3010?",
                answer: "50",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A processor has 64 registers and uses a 16-bit instruction format. It has I-type (opcode, register, 4-bit immediate) and R-type (opcode, two registers) instructions. If there are 8 distinct I-type opcodes, what is the maximum number of distinct R-type opcodes?",
                answer: "14",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "A processor has 16 integer registers and 64 floating point registers, and uses a 2-byte instruction format. Instructions are categorized as Type-1 (4 instructions, 3 int registers), Type-2 (8 instructions, 2 float registers), Type-3 (14 instructions, 1 int & 1 float register), and Type-4 (N instructions, 1 float register). What is the maximum value of N?",
                answer: "32",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "After a device controller issues an interrupt while process L is under execution, which is the correct order of events?\n(P) Processor pushes process status of L\n(Q) Processor finishes current instruction\n(R) Processor executes ISR\n(S) Processor pops process status of L\n(T) Processor loads new PC value",
                options: ["QPTRS", "PTRSQ", "TRPQS", "QTPRS"],
                answer: "QPTRS",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "A Processor has 64 registers and an instruction set of size twelve. Each instruction has five fields: opcode, two source registers, one destination register, and a twelve-bit immediate value. If a program has 100 instructions, how much memory (in bytes) does it consume?",
                answer: "500",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "A Processor has 40 distinct instructions and 24 general purpose registers. A 32-bit instruction word has an opcode, two register operands and an immediate operand. The number of bits available for the immediate operand field is _____.",
                answer: "16",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "For computers based on three-address instruction formats, each address field can be used to specify which of the following:\nS1: A memory operand\nS2: A processor register\nS3: An implied accumulator register",
                options: [
                    "Either S1 or S2",
                    "Either S2 or S3",
                    "Only S2 and S3",
                    "All of S1, S2 and S3",
                ],
                answer: "Either S1 or S2",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider a processor with byte-addressable memory. A CALL instruction (2 words) is implemented. The PC content before fetch is (5FA0)16. The SP is (016E)16. The stack grows upward. After executing the CALL, what is the value of the stack pointer?",
                options: ["(016A)16", "(016C)16", "(0170)16", "(0172)16"],
                answer: "(0172)16",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A 32-bit architecture machine with 64 registers (each 32 bits) needs to support 45 instructions, which have an immediate operand in addition to two register operands. What is the maximum value of the unsigned immediate operand?",
                answer: "16383",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "What is the minimum number of registers needed to evaluate the expression tree `(a-b) + (c+(d-e))` on a load-store architecture machine if no intermediate results can be stored in memory?",
                options: ["2", "9", "5", "3"],
                answer: "3",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A CPU generally handles an interrupt by executing an interrupt service routine:",
                options: [
                    "As soon as an interrupt is raised.",
                    "By checking the interrupt register at the end of fetch cycle.",
                    "By checking the interrupt register after finishing the execution of the current instruction.",
                    "By checking the interrupt register at fixed time intervals.",
                ],
                answer: "By checking the interrupt register after finishing the execution of the current instruction.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which of the following must be true for the RFE (Return from Exception) instruction on a general-purpose processor?\n1. It must be a trap instruction\n2. It must be a privileged instruction\n3. An exception cannot be allowed to occur during execution of an RFE instruction.",
                options: [
                    "1 only",
                    "2 only",
                    "1 and 2 only",
                    "1, 2 and 3 only",
                ],
                answer: "1, 2 and 3 only",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The field student.grade in a C struct can be accessed efficiently using which addressing mode, if R1 holds the base address of the student struct?",
                options: [
                    "Post-increment addressing mode, (R1)+",
                    "Pre-decrement addressing mode, -(R1)",
                    "Register direct addressing mode, R1",
                    "Index addressing mode, X(R1)",
                ],
                answer: "Index addressing mode, X(R1)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A hypothetical processor has an instruction `LW R1, 20(R2)`, which reads a 32-bit word from memory and stores it in R1. The effective address is obtained by adding a constant 20 and the contents of R2. Which addressing mode does this reflect?",
                options: [
                    "Immediate Addressing",
                    "Register Addressing",
                    "Register Indirect Scaled Addressing",
                    "Base Indexed Addressing",
                ],
                answer: "Base Indexed Addressing",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following is/are true of the auto-increment addressing mode?\n1. It is useful in creating self-relocating code.\n2. It requires an additional ALU for effective address calculation.\n3. The increment amount depends on the size of the data item accessed.",
                options: ["1 only", "2 only", "3 only", "2 and 3 only"],
                answer: "3 only",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Using X as a stack pointer, which instruction can pop two elements from the stack, add them, and push the result back?\nEA=(X)+: post-increment\nEA=-(X): pre-decrement\nEA=(X)-: post-decrement",
                options: [
                    "ADD (X)-, (X)",
                    "ADD (X), (X)-",
                    "ADD -(X), (X)+",
                    "ADD -(X), (X)",
                ],
                answer: ["ADD (X)-, (X)"],
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the micro-operations: MBR <- PC; MAR <- X; PC <- Y; Memory <- MBR. Which operation is possibly performed by this sequence?",
                options: [
                    "Instruction fetch",
                    "Operand fetch",
                    "Conditional branch",
                    "Initiation of interrupt service",
                ],
                answer: "Initiation of interrupt service",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "A multiplexer is placed between 32 registers and an accumulator. What is the minimum number of select lines needed for the multiplexer?",
                answer: "5",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Which is the correct order of steps to execute the instruction R0 <- R1 + R2 on the given data path diagram?",
                options: [
                    "3, 5, 1, 2, 4",
                    "2, 1, 4, 5, 3",
                    "3, 5, 2, 1, 4",
                    "1, 2, 4, 3, 5",
                ],
                answer: "3, 5, 2, 1, 4",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A CPU with 140 instructions requires 7 clock cycles per instruction. 125 control signals are needed. For a horizontal micro-programmed control unit with a single address field, what is the minimum size of the control word and control address register?",
                options: ["125, 7", "125, 10", "135, 9", "135, 10"],
                answer: "135, 10",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which of the following are characteristics of a RISC processor?\nI. Register-to-register arithmetic operations only.\nII. Fixed-length instruction format.\nIII. Hardwired control unit.",
                options: [
                    "I and II only",
                    "II and III only",
                    "I and III only",
                    "I, II and III",
                ],
                answer: "I, II and III",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Two processors P1 and P2 execute the same instruction set. P2 takes 25% less time but has 20% more CPI than P1. If P1's clock frequency is 1 GHz, what is P2's clock frequency in GHz?",
                answer: "1.6",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "In an instruction execution pipeline, when is the earliest that the data TLB (Translation Look-aside Buffer) can be accessed?",
                options: [
                    "Before effective address calculation has started",
                    "During effective address calculation",
                    "After effective address calculation has completed",
                    "After data cache lookup has completed",
                ],
                answer: "After effective address calculation has completed",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A 3-stage pipelined processor has stage delays of 10 ns, 20 ns, and 14 ns. Assuming no hazards, what is the total execution time for 100 instructions?",
                answer: "2040",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A 5-stage pipelined processor operating at 2 GHz has stalls from memory and branch instructions. Given 30% memory instructions (5% cause 50 cycle stalls) and 10% branch instructions (50% cause 2 cycle stalls), what is the speedup over a non-pipelined 2.5 GHz processor that takes 5 cycles per instruction?",
                answer: "2.16",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "A RISC processor pipeline has IF, ID, OF, PO, and WB stages, each taking 1 clock cycle. In a sequence of 100 instructions, 40 take 3 cycles in PO, 35 take 2 cycles in PO, and 25 take 1 cycle. What is the total number of clock cycles required?",
                answer: "219",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "An instruction execution is divided into 5 stages (IF, ID, OF, EX, WB) with delays 5, 4, 20, 10, 3 ns respectively. A pipelined implementation adds a 2 ns buffer delay. What is the speedup of an efficient pipelined implementation (OF split into 12ns and 8ns) over a naive one for 20 instructions?",
                answer: "1.52",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider four processors: P1 (4-stage, 1,2,2,1 ns), P2 (4-stage, 1,1.5,1.5,1.5 ns), P3 (5-stage, 0.5,1,1,0.6,1 ns), P4 (5-stage, 0.5,0.5,1,1,1.1 ns). Which processor has the highest peak clock frequency?",
                options: ["P1", "P2", "P3", "P4"],
                answer: "P3",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A 3 GHz processor has a three-stage pipeline with latencies τ1, τ2, τ3 where τ1 = 3τ2/4 = 2τ3. If the longest stage is split into two equal stages, what is the new frequency in GHz?",
                answer: "4",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "The stage delays in a 4-stage pipeline are 800, 500, 400, 300 ps. The first stage is replaced by two stages with delays 600 and 350 ps. What is the throughput increase of the pipeline in percent?",
                answer: "33",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "A non-pipelined processor has a clock rate of 2.5 GHz and average CPI of 4. It's upgraded to a 5-stage pipeline with a clock speed of 2 GHz. Assuming no stalls, what is the speedup?",
                answer: "3.2",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "An instruction pipeline has five stages with given latencies. The ID/RF stage is split into three and EX into two. Given 20% branch instructions, what is the value of P/Q where P and Q are execution times on the old and new designs?",
                answer: "1.54",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "In a 6-stage perfectly balanced pipeline, what is the speedup over non-pipelined execution if 25% of instructions incur 2 pipeline stall cycles?",
                answer: "4",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "An instruction pipeline has five stages with delays FI=5, DI=7, FO=10, EI=8, WO=6 ns and a 1ns buffer delay. A program has 12 instructions, with I4 being a branch to I9. If the branch is taken, what time is needed to complete the program?",
                options: ["132", "165", "176", "328"],
                answer: "165",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A 4-stage pipeline has stage delays of 5, 6, 11, 8 ns and a 1 ns register delay. What is the approximate speedup of the pipeline in steady state over a non-pipeline implementation?",
                options: ["4.0", "2.5", "1.1", "3.0"],
                answer: "2.5",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A 4-stage pipeline processor executes the loop `For (i=1 to 2) {I1; I2; I3; I4;}`. Given the cycles needed for each instruction in each stage, how many cycles are needed to execute the loop?",
                options: ["16", "23", "28", "30"],
                answer: "23",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "A 100 MHz non-pipelined processor is converted to a 5-stage synchronous pipeline with stage delays 2.5, 1.5, 2, 1.5, 2.5 ns and 0.5 ns latch delay. What is the speedup for a large number of instructions?",
                options: ["4.5", "4.0", "3.33", "3.0"],
                answer: "3.33",
            },
        ],
        4: [
            {
                id: 1,
                type: "nat",
                question:
                    "A processor X1 at 2 GHz has a 5-stage pipeline with a base CPI of 1. 30% of instructions are branches, causing a 2-cycle stall each. A new version X2 has a branch predictor unit (BPU) with 80% accuracy. What is the speedup of X2 over X1?",
                answer: "1.42",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A five-stage pipeline has stage delays of 150, 120, 150, 160, 140 ns, with a 5 ns register delay. What is the total time to execute 100 independent instructions, assuming no stalls?",
                answer: "17160",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A 5-stage pipelined processor executes 8 instructions (ADD, MUL, ADD, MUL...). Each MUL depends on the preceding ADD, and each ADD (except the first) depends on the preceding MUL. The EX stage takes 1 cycle for ADD, 2 for MUL. What is the speedup with operand forwarding over without?",
                answer: "1.87",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "In a RISC machine with 4-byte instructions, a branch instruction at address `i+3` has a target `i`. The Offset is specified in bytes relative to the next instruction's address. What is the decimal value of the Offset?",
                answer: "-16",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the code sequence: I1: ADD R1,R2,R3; I2: MUL R7,R1,R3; I3: SUB R4,R1,R5; I4: ADD R3,R2,R4; I5: MUL R7,R8,R9. Which statement is correct?\nS1: Anti-dependence between I2 and I5.\nS2: Anti-dependence between I2 and I4.",
                options: [
                    "Only S1 is true",
                    "Only S2 is true",
                    "Only S1 and S3 are true",
                    "Only S2 and S3 are true",
                ],
                answer: "Only S2 is true",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A pipelined processor with 4 stages (IF, OF, PO, WB) executes a sequence of instructions. PO takes 1 cycle for ADD/SUB, 3 for MUL, 5 for DIV. With operand forwarding from PO to OF, how many clock cycles are needed for the sequence: MUL R5,R0,R1; DIV R6,R2,R3; ADD R7,R5,R6; SUB R8,R7,R4?",
                answer: "13",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Register renaming in pipelined processors is done for what purpose?",
                options: [
                    "As an alternative to register allocation at compile time",
                    "For efficient access to function parameters and local variables",
                    "To handle certain kinds of hazards",
                    "As part of address translation",
                ],
                answer: "To handle certain kinds of hazards",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A 5-stage pipelined processor uses operand forwarding. PO takes 1 cycle for ADD/SUB, 3 for MUL, 6 for DIV. What is the number of clock cycles needed for the instructions: I0: MUL R2,R0,R1; I1: DIV R5,R3,R4; I2: ADD R2,R5,R2; I3: SUB R5,R2,R6?",
                options: ["13", "15", "17", "19"],
                answer: "15",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A pipelined processor has one branch delay slot. For the code `I1: ADD R2<-R7+R8; I2: SUB R4<-R5-R6; I3: ADD R1<-R2+R3; I4: STORE [R4]<-R1; BRANCH to Label if R1==0`, which instruction can legitimately occupy the delay slot?",
                options: ["I1", "I2", "I3", "I4"],
                answer: "I2",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "For all delayed conditional branch instructions, irrespective of whether the condition evaluates to true or false, what happens?",
                options: [
                    "The instruction following the conditional branch instruction in memory is executed",
                    "The first instruction in the fall through path is executed",
                    "The first instruction in the taken path is executed",
                    "The branch takes longer to execute than any other instruction",
                ],
                answer: "The instruction following the conditional branch instruction in memory is executed",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which of the following are NOT true in a pipelined processor?\n1. Bypassing can handle all RAW hazards.\n2. Register renaming can eliminate all register carried WAR hazards.\n3. Control hazard penalties can be eliminated by dynamic branch prediction.",
                options: [
                    "1 and 2 only",
                    "1 and 3 only",
                    "2 and 3 only",
                    "1, 2 and 3",
                ],
                answer: "1 and 3 only",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "Consider a two-level cache hierarchy. An application incurs 1.4 memory accesses per instruction. The miss rate of L1 is 0.1, and L2 experiences 7 misses per 1000 instructions. The miss rate of L2 expressed correct to two decimal places is _____.",
                answer: "0.05",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "In a two-level cache system, L1 access is 1 cycle, L2 is 8 cycles, and main memory penalty is 18 cycles. L1 miss rate is twice L2's. If the average memory access time (AMAT) is 2 cycles, what are the miss rates of L1 and L2 respectively?",
                options: [
                    "0.111 and 0.056",
                    "0.056 and 0.111",
                    "0.0892 and 0.1784",
                    "0.1784 and 0.0892",
                ],
                answer: "0.111 and 0.056",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "In designing a computer’s cache system, which one of the following statements is correct regarding cache block size?",
                options: [
                    "A smaller block size implies better spatial locality",
                    "A smaller block size implies a smaller cache tag and hence lower cache tag overhead",
                    "A smaller block size implies a larger cache tag and hence lower cache hit time",
                    "A smaller block size incurs a lower cache miss penalty",
                ],
                answer: "A smaller block size implies a smaller cache tag and hence lower cache tag overhead",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "An 8-way set associative cache of size 64 KB is used in a system with a 32-bit address. The address is sub-divided into TAG, INDEX, and BLOCK OFFSET. The number of bits in the TAG is ______________.",
                answer: "19",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    "A computer system with a byte-addressable primary memory of size 2^32 bytes has a direct-mapped cache of size 32 KB, and each cache block is of size 64 bytes. The size of the tag field is _______bits.",
                answer: "17",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider a set-associative cache of size 2 KB with cache block size of 64 bytes. The system is byte-addressable and uses a 32-bit address. If the width of the tag field is 22 bits, the associativity of the cache is _____.",
                answer: "2",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "A system with a 32-bit word length has a 16 MB byte-addressable main memory and a 64 KB, 4-way set associative cache with a block size of 256 bytes. Which of the following is TRUE regarding the physical addresses A1=0x42C8A4, A2=0x546888, A3=0x6A289C, A4=0x5E4880?",
                options: [
                    "A1 and A3 are mapped to the same cache set.",
                    "A2 and A3 are mapped to the same cache set.",
                    "A3 and A4 are mapped to the same cache set.",
                    "A1 and A4 are mapped to different cache sets.",
                ],
                answer: "A2 and A3 are mapped to the same cache set.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A processor uses a fully associative cache of size 16 kB. The cache block size is 16 bytes. The main memory is byte addressable and uses a 32-bit address. How many bits are required for the Tag and the Index fields respectively?",
                options: [
                    "24-bits and 0-bits",
                    "28-bits and 4-bits",
                    "24-bits and 4-bits",
                    "28-bits and 0-bits",
                ],
                answer: "28-bits and 0-bits",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "The size of the physical address space is 2^p bytes, word length is 2^w bytes, cache capacity is 2^n bytes, and block size is 2^m words. For a K-way set-associative cache, what is the length of the tag field?",
                options: [
                    "P – N – log2 K",
                    "P – N + log2 K",
                    "P – N – M – W – log2 K",
                    "P – N – M – W + log2 K",
                ],
                answer: "P – N – M – W + log2 K",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A machine has a byte addressable main memory of 2^32 bytes divided into blocks of 32 bytes. A direct mapped cache has 512 cache lines. The size of the tag field in bits is _____.",
                options: ["12", "16", "18", "24"],
                answer: "18",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A cache memory unit with capacity N words and block size B words is designed. As a direct mapped cache, the TAG field is 10 bits. If it's redesigned as a 16-way set-associative cache, what is the new TAG field length?",
                answer: "14",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The width of the physical address on a machine is 40 bits. The width of the tag field in a 512 KB 8-way set associative cache is ______bits.",
                options: ["24", "20", "30", "40"],
                answer: "24",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider a machine with 2^20 bytes main memory, 16-byte block size, and a direct mapped cache with 2^12 lines. What are the tag and cache line address (in hex) for main memory address (E201F)16?",
                options: ["E, 201", "F, 201", "E, E20", "2, 01F"],
                answer: "E, 201",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A 4-way set-associative cache of 16 KB is built using a block size of 8 words (32-bit words). The physical address space is 4 GB. The number of bits for the TAG field is _______.",
                answer: "20",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "If the associativity of a processor cache is doubled while keeping capacity and block size unchanged, which of the following is guaranteed to be NOT affected?",
                options: [
                    "Width of tag comparator",
                    "Width of set index decoder",
                    "Width of way selection multiplexer",
                    "Width of processor to main memory data bus",
                ],
                answer: "Width of processor to main memory data bus",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "In a k-way set associative cache with v sets, main memory block 'j' must be mapped to any one of the cache lines from:",
                options: [
                    "(j mod v) * k to (j mod v) * k + (k-1)",
                    "(j mod v) * (j mod v) + (k-1)",
                    "(j mod k) to (j mod k) + (v-1)",
                    "(j mod k) * v to (j mod k) * v + (v-1)",
                ],
                answer: "(j mod v) * k to (j mod v) * k + (k-1)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "While accessing memory location 0C795H in a 4-way set-associative cache (1MB main memory, 8KB cache, 128-word block), what are the contents of the TAG field?",
                options: ["000011000", "110001111", "00011000", "110010101"],
                answer: "00011000",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "For a 4-way set-associative cache (1MB main memory, 8KB cache, 128-word block), what are the number of bits in the TAG, SET and WORD fields, respectively?",
                options: ["7, 6, 7", "8, 5, 7", "8, 6, 6", "9, 4, 7"],
                answer: "9, 4, 7",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following array elements has the same cache index as ARR[0][0] in a 2-way set associative cache of size 64KB and block size 16 bytes?",
                options: ["ARR[0][4]", "ARR[4][0]", "ARR[0][5]", "ARR[5][0]"],
                answer: "ARR[4][0]",
            },
        ],
        6: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider a 2-way set associative cache with 256 blocks using LRU replacement. An access sequence to memory blocks (0, 128, 256, 128, 0, ...) is repeated 10 times. How many conflict misses are experienced by the cache?",
                answer: "76",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "What is the miss ratio for an access sequence of length N with n unique block addresses, passed through a cache of associativity A >= k (where k is the upper bound of unique blocks between two accesses to the same block), using LRU?",
                options: ["n/N", "1/N", "1/A", "k/n"],
                answer: "n/N",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "In a 4-way set associative cache with 16 blocks and main memory of 256 blocks, for the request sequence: 0, 255, 1, 4, 3, 8, 133, 159, 216, 129, 63, 8, 48, 32, 73, 92, 155 using LRU, which block will NOT be in the cache?",
                options: ["3", "8", "129", "216"],
                answer: "216",
            },
            {
                id: 4,
                type: "msq",
                question:
                    "Let WB be a write-back cache and WT be a write-through cache, both using LRU. Which statements are FALSE?\n(a) Each cache block in WB and WT has a dirty bit.\n(b) Every write hit in WB leads to a data transfer from cache to main memory.\n(c) Eviction of a block from WT will not lead to data transfer from cache to main memory.\n(d) A read miss in WB will never lead to eviction of a dirty block from WB.",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b", "d"],
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A cache has a hit rate of 0.8, access latency of 10 ns, and miss penalty of 100 ns. An optimization reduces the miss rate but increases access latency to 15 ns, without affecting the miss penalty. What is the minimum hit rate needed after optimization to not increase the average memory access time?",
                answer: "0.85",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In a two-level inclusive cache hierarchy (L1 and L2, L2 is larger), which statement is correct?\nS1: Read misses in a write-through L1 cache do not result in write backs of dirty lines to L2.\nS2: Write allocate policy must be used with write-through caches, and no-write allocate with write-back caches.",
                options: [
                    "S1 is true and S2 is true",
                    "S1 is true and S2 is false",
                    "S1 is false and S2 is true",
                    "S1 is false and S2 is false",
                ],
                answer: "S1 is false and S2 is false",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A 1 MB direct mapped cache has a block size of 256 bytes, access time of 3 ns, and hit rate of 94%. On a miss, it takes 20 ns to bring the first word (64 bits) and 5 ns for each subsequent word from main memory. What is the average memory access time in ns?",
                answer: "13.3",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "A processor with a single-level cache has a block size of 8 words (4 bytes/word) and a 60-MHz clock. A cache miss takes 1 cycle to accept the address, 3 cycles to fetch the block, and 1 cycle per word to transmit. What is the maximum bandwidth (in 10^6 bytes/sec) for a series of read operations?",
                answer: "160",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "In a memory hierarchy, I-cache has 2ns access time and 0.8 hit ratio. D-cache has 2ns access time and 0.9 hit ratio. L2 cache has 8ns access time and 0.9 hit ratio. Main memory access is 90ns. 60% of accesses are for instructions. What is the average read access time in nanoseconds?",
                answer: "4.72",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A file system uses an in-memory cache. Cache read latency is 1ms, disk read is 10ms. Given a miss rate curve, what is the smallest cache size in MB to ensure an average read latency of less than 6 ms?",
                answer: "30",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "A processor has a read request that takes 50ns on a cache miss and 5ns on a hit. If 80% of read requests result in a cache hit, what is the average read access time in nanoseconds?",
                answer: "14",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "A program has 100 instruction fetches, 60 memory reads, and 40 memory writes. Cache hit-ratio is 0.9. Timings (in ns) are: read hit=1, read miss=5, write hit=2, write miss=10. What is the average memory access time?",
                answer: "1.68",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "An 8KB direct-mapped write-back cache has 32-byte blocks. The processor uses 32-bit addresses. What is the total size of memory (in bits) needed at the cache controller to store metadata (tags, valid, modified bits)?",
                options: ["4864 bits", "6144 bits", "6656 bits", "5376 bits"],
                answer: "5376 bits",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A system has L1 and L2 caches. L1 block size is 4 words, L2 is 16 words. Access times are 2ns, 20ns, 200ns for L1, L2, and Main Memory. On an L1 miss and L2 hit, what is the time to transfer a block from L2 to L1?",
                options: ["2 ns", "20 ns", "22 ns", "88 ns"],
                answer: "22 ns",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "On a miss in both L1 and L2 caches, a block is transferred from main memory to L2, then from L2 to L1. What is the total time for these transfers?",
                options: ["222 ns", "888 ns", "902 ns", "968 ns"],
                answer: "902 ns",
            },
        ],
        7: [
            {
                id: 1,
                type: "mcq",
                question:
                    "For inclusion to hold between two cache levels L1 and L2, which of the following are necessary?\n1. L1 must be a write-through cache\n2. L2 must be write-through cache\n3. The associativity of L2 must be greater than that of L1\n4. The L2 cache must be at least as large as the L1 cache",
                options: [
                    "4 only",
                    "1 and 4 only",
                    "1,2 and 4 only",
                    "1,2,3 and 4",
                ],
                answer: "4 only",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A 4 KB byte-addressable memory is realized using four 1 KB memory blocks. Input address lines IA4 and IA3 are connected to a decoder's CS port. Remaining lines IA11-IA0 are connected to the address port. What are the starting locations (in decimal) of each block?",
                options: [
                    "(0, 1, 2, 3)",
                    "(0, 1024, 2048, 3072)",
                    "(0, 8, 16, 24)",
                    "(0, 0, 0, 0)",
                ],
                answer: "(0, 1024, 2048, 3072)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A 32-bit wide main memory of 1 GB capacity is built using 256M x 4-bit DRAM chips. Each chip has 2^14 rows. A refresh operation takes 50 ns, and the refresh period is 2 ms. What percentage of time is available for memory read/write operations?",
                answer: "59",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "A processor can support a maximum memory of 4 GB, where memory is word-addressable (a word is two bytes). The size of the address bus is at least ______ bits.",
                answer: "31",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A main memory system has 8 modules. A write request occupies the bus for 100 ns. During this time and for 500 ns after, the module executes the write. What is the maximum number of stores that can be initiated in 1 millisecond?",
                answer: "10000",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A RAM chip has a capacity of 1024 words of 8 bits each (1K x 8). How many 2x4 decoders with enable lines are needed to construct a 16K x 16 RAM from these chips?",
                options: ["4", "5", "6", "7"],
                answer: "5",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A 4 MB main memory is built using 1M x 1-bit DRAM chips, each with 1K rows of 1K cells. A single refresh takes 100 ns. What is the time required to refresh all cells in the memory unit?",
                options: [
                    "100 ns",
                    "100 * 2^10 ns",
                    "100 * 2^20 ns",
                    "3200 * 2^20 ns",
                ],
                answer: "100 * 2^10 ns",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "How many 32K x 1 RAM chips are needed to provide a memory capacity of 256K-bytes?",
                options: ["8", "32", "64", "128"],
                answer: "64",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which of the following facilitates the transfer of bulk data from a hard disk to main memory with the highest throughput?",
                options: [
                    "DMA based I/O transfer",
                    "Interrupt driven I/O transfer",
                    "Polling based I/O transfer",
                    "Programmed I/O transfer",
                ],
                answer: "DMA based I/O transfer",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A 2 MHz processor uses cycle stealing for DMA. It transfers one 8-bit character per CPU cycle. If 0.5% of processor cycles are used for DMA, what is the data transfer rate of the device in bits per second?",
                answer: "80000",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the following statements:\nI. Daisy chaining is used to assign priorities in attending interrupts.\nIII. In polling, the CPU periodically checks status bits.\nWhich are TRUE?",
                options: [
                    "I, II only",
                    "I and IV only",
                    "I and III only",
                    "III only",
                ],
                answer: "I and III only",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "A DMA controller's data count register is 16 bits. A 29,154 KB file is to be transferred from disk to byte-addressable main memory. What is the minimum number of times the DMA controller needs control of the bus?",
                answer: "456",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A program segment in an ISR transfers 500 bytes. Load/store instructions take 2 cycles, others take 1. Using DMA, which requires 20 cycles for initialization and 2 cycles per byte transfer, what is the speedup?",
                options: ["3.4", "4.4", "5.1", "6.7"],
                answer: "3.4",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "A system polls a keyboard (1 keystroke/sec) every 10 ms, consuming 100 µs per poll. If a key is pressed, it consumes an additional 200 µs. In an interrupt-based alternative, servicing an interrupt takes 1 ms. What is the ratio T1/T2, where T1 and T2 are fractions of a second spent in each implementation?",
                answer: "10.2",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "A disk rotates at 15000 RPM with a transfer rate of 50x10^6 bytes/sec. Average seek time is twice the average rotational delay, and controller transfer time is 10 times disk transfer time. What is the average time (in ms) to read/write a 512-byte sector?",
                answer: "6.1",
            },
        ],
        8: [
            {
                id: 1,
                type: "nat",
                question:
                    "A disk pack has a seek time of 4 ms and rotational speed of 10000 RPM. It has 600 sectors/track, 512 bytes/sector. A file of 2000 sectors is stored. If every sector access needs a seek and average rotational latency is half of one rotation, what is the total time (in ms) to read the file?",
                answer: "14020",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A hard disk has 16 surfaces, 16384 cylinders, and 64 sectors/cylinder, 512 bytes/sector. A 42797 KB file starts at <1200, 9, 40>. If stored contiguously, what is the cylinder number of the last sector?",
                options: ["1281", "1282", "1283", "1284"],
                answer: "1284",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "An application loads 100 libraries at start-up, each requiring one disk access. Seek time is 10 ms, rotational speed is 6000 rpm. If libraries are loaded from random locations, how long does it take to load all of them? (Neglect transfer time).",
                options: ["0.50s", "1.50s", "1.25s", "1.00s"],
                answer: "1.50s",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A hard disk has 63 sectors/track, 10 platters (20 surfaces), and 1000 cylinders. The address of sector <400, 16, 29> corresponds to which sector number?",
                options: ["505035", "505036", "505037", "505038"],
                answer: "505037",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "The address of the 1039th sector on a hard disk with 63 sectors/track and 20 surfaces is:",
                options: ["<0,15,31>", "<0,16,30>", "<0,16,31>", "<0,17,31>"],
                answer: "<0,16,31>",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "For a magnetic disk with concentric circular tracks, the latency is not linearly proportional to the seek distance due to:",
                options: [
                    "Non-uniform distribution of requests",
                    "Arm starting and stopping inertia",
                    "Higher capacity of tracks on the periphery of the platter",
                    "Use of unfair arm scheduling policies.",
                ],
                answer: "Arm starting and stopping inertia",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "For the initialization loop `for (i=0; i<1024; i++) for (j=0; j<1024; j++) ARR[i][j]=0.0;`, on a machine with a 2-way set associative data cache, what is the cache hit ratio?",
                options: ["0%", "25%", "50%", "5%"],
                answer: "50%",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The total size of the tags in the cache directory for a machine with a 2-way set associative data cache of size 64Kbytes and block size 16 bytes is:",
                options: ["32 kbits", "34 kbits", "64 kbits", "68 kbits"],
                answer: "68 kbits",
            },
            {
                id: 9,
                type: "msq",
                question:
                    "A system has a 2 KB direct mapped data cache with a 64-byte block size. For the access sequence PQRSPQRS..., which statements are TRUE?\nP=0xA248, Q=0xC28A, R=0xCA8A, S=0xA262.",
                options: [
                    "Every access to S is a hit.",
                    "Once P is brought to the cache it is never evicted.",
                    "At the end of the execution only R and S reside in the cache.",
                    "Every access to R evicts Q from the cache.",
                ],
                answer: [
                    "Every access to S is a hit.",
                    "Once P is brought to the cache it is never evicted.",
                    "Every access to R evicts Q from the cache.",
                ],
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following is correct regarding memory hierarchy?",
                options: [
                    "Registers are slower than cache",
                    "Main memory is faster than disk",
                    "Cache is non-volatile",
                    "Disk is faster than registers",
                ],
                answer: "Main memory is faster than disk",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A processor with a 36-bit physical address and 32-bit virtual address uses a 4KB page size and a three-level page table. Bits 30-31 index the first level, 21-29 the second, and 12-20 the third. What are the number of bits for addressing the next level page table in the first, second, and third level entries?",
                options: [
                    "20, 20, 20",
                    "24, 24, 24",
                    "24, 24, 20",
                    "25, 25, 24",
                ],
                answer: "24, 24, 24",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A paging scheme uses a TLB. A TLB access takes 10 ns and main memory access takes 50 ns. If the TLB hit ratio is 90% and there is no page fault, what is the effective access time?",
                options: ["54", "60", "65", "75"],
                answer: "65",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A cache is organized as multiple blocks, each of size 32 bytes. The processor generates 32-bit addresses. What is the organization of the cache?",
                options: [
                    "Direct Mapped",
                    "Set-Associative",
                    "Fully Associative",
                    "Cannot be determined",
                ],
                answer: "Cannot be determined",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A 32-bit architecture has 1-word long instructions and 64 registers. What is a key feature of this architecture?",
                options: ["CISC", "RISC", "VLIW", "Stack-based"],
                answer: "RISC",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "In a multilevel page table, what is the primary advantage over a single-level page table?",
                options: [
                    "Reduces memory access time",
                    "Helps reduce the size of the page table",
                    "Required by the TLB",
                    "Reduces page faults",
                ],
                answer: "Helps reduce the size of the page table",
            },
        ],
        9: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider a DMA support system where the DMA module transfers one 8-bit character in one CPU cycle. The processor is 2 MHz. If 0.5% of processor cycles are used for DMA, what is the data transfer rate in bits per second?",
                answer: "80000",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A disk pack has a seek time of 4 ms and a rotational speed of 10000 RPM. It contains 2000 sectors. If every sector access necessitates a seek and the average rotational latency is half the time for one complete rotation, what is the total time in ms to read the entire file?",
                answer: "14020",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces, and 1000 cylinders. What is the address of the 1039th sector?",
                options: ["<0,15,31>", "<0,16,30>", "<0,16,31>", "<0,17,31>"],
                answer: "<0,16,31>",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The total size of tags in a 2-way set associative cache of 64KB with a block size of 16 bytes is:",
                options: ["32 kbits", "34 kbits", "64 kbits", "68 kbits"],
                answer: "68 kbits",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "A processor with a 32-bit physical address uses a 3-level page table. Bits 30-31 index the first level, 21-29 index the second, and 12-20 index the third. The page size is 4 Kbytes. How many bits are required for addressing the page frame in a page table entry?",
                options: ["20", "24", "22", "25"],
                answer: "24",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A 16-bit 2's complement number is 1111111111110101. What is its decimal representation?",
                answer: "-11",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A program segment to transfer 500 bytes from an I/O device to memory is given. Load/store instructions take 2 clock cycles and other instructions take 1. Using a DMA controller that requires 20 clock cycles for initialization and 2 cycles per byte transfer, what is the speedup?",
                options: ["3.4", "4.4", "5.1", "6.7"],
                answer: "3.4",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "A keyboard connected to a computer is used at a rate of 1 keystroke/sec. The system polls the keyboard every 10 ms, consuming 100 µs per poll, plus 200 µs to process a keystroke. The alternative is an interrupt-based system taking 1 ms total per keystroke. What is the ratio of time spent in the polling system to the interrupt system?",
                answer: "10.2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "How many 32K × 1 RAM chips are needed to provide a memory capacity of 256K-bytes?",
                options: ["8", "32", "64", "128"],
                answer: "64",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What is the minimum number of 2-input NOR gates required to implement the Boolean function (AB + C)?",
                options: ["2", "3", "4", "5"],
                answer: "3",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the following statements:\nI. Daisy chaining is used to assign priorities in attending interrupts.\nII. A vectored interrupt requires the CPU to poll to identify the source.\nIII. In polling, the CPU periodically checks status bits.",
                options: [
                    "I, II only",
                    "I and IV only",
                    "I and III only",
                    "III only",
                ],
                answer: "I and III only",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A processor has 16 integer registers and 64 floating point registers, using a 2-byte instruction format. What is a key design consideration for this processor?",
                options: [
                    "Instruction encoding efficiency",
                    "Register file size",
                    "Memory bandwidth",
                    "Pipeline depth",
                ],
                answer: "Instruction encoding efficiency",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The number of bits in the tag field of a 4-way set-associative cache memory unit with a capacity of 16 KB, block size of 8 words (32-bit), and a 4 GB physical address space is:",
                answer: "20",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "In a 2-way set associative cache of size 64KB and block size 16 bytes, which array element shares the same cache index as ARR[0][0]?",
                options: ["ARR[0][4]", "ARR[4][0]", "ARR[0][5]", "ARR[5][0]"],
                answer: "ARR[4][0]",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "A processor with a 32-bit address uses a fully associative cache of 16kB with a 16-byte block size. How many bits are for the Tag and Index fields?",
                options: [
                    "24-bits and 0-bits",
                    "28-bits and 4-bits",
                    "24-bits and 4-bits",
                    "28-bits and 0-bits",
                ],
                answer: "28-bits and 0-bits",
            },
        ],
        10: [
            {
                id: 1,
                type: "nat",
                question:
                    "A 32-bit architecture machine with 64 registers (each 32 bits) supports 45 instructions. Each instruction has an immediate operand and two register operands. What's the maximum value of the unsigned immediate operand?",
                answer: "16383",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which of the following must be true for the RFE (Return from Exception) instruction?\n1. It must be a trap instruction.\n2. It must be a privileged instruction.\n3. An exception cannot occur during its execution.",
                options: ["1 only", "2 only", "1 and 2 only", "1, 2 and 3"],
                answer: "1, 2 and 3",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which addressing mode is best for accessing `student.grade` if R1 holds the base address of the `student` struct?",
                options: [
                    "Post-increment",
                    "Pre-decrement",
                    "Register direct",
                    "Index addressing",
                ],
                answer: "Index addressing",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "An instruction `LW R1, 20(R2)` reads a word from memory at the address `20 + R2`. This is an example of what addressing mode?",
                options: [
                    "Immediate",
                    "Register",
                    "Register Indirect Scaled",
                    "Base Indexed",
                ],
                answer: "Base Indexed",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which of the following is true about auto-increment addressing mode?",
                options: [
                    "Useful for self-relocating code",
                    "Requires an extra ALU",
                    "Increment amount depends on data size",
                    "Both b and c",
                ],
                answer: "Increment amount depends on data size",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which instruction can pop two items from a stack (pointer X), add them, and push the result back?",
                options: [
                    "ADD (X)-, (X)",
                    "ADD (X), (X)-",
                    "ADD -(X), (X)+",
                    "ADD -(X), (X)",
                ],
                answer: "ADD (X)-, (X)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The micro-operations `MBR <- PC; MAR <- X; PC <- Y; Memory <- MBR` likely perform:",
                options: [
                    "Instruction fetch",
                    "Operand fetch",
                    "Conditional branch",
                    "Interrupt service initiation",
                ],
                answer: "Interrupt service initiation",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "What's the minimum number of select lines for a multiplexer between 32 registers and an accumulator?",
                answer: "5",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the correct execution order for R0 <- R1 + R2 using the given data path?",
                options: [
                    "3, 5, 1, 2, 4",
                    "2, 1, 4, 5, 3",
                    "3, 5, 2, 1, 4",
                    "1, 2, 4, 3, 5",
                ],
                answer: "3, 5, 2, 1, 4",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A CPU has 140 instructions, 7 cycles/instruction, and 125 control signals. For a horizontal micro-programmed control unit, what's the minimum control word and address register size?",
                options: ["125, 7", "125, 10", "135, 9", "135, 10"],
                answer: "135, 10",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which are characteristics of a RISC processor?\nI. Register-to-register arithmetic.\nII. Fixed-length instructions.\nIII. Hardwired control unit.",
                options: [
                    "I and II only",
                    "II and III only",
                    "I and III only",
                    "I, II and III",
                ],
                answer: "I, II and III",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "P1's clock is 1 GHz. P2 takes 25% less time but has 20% more CPI. What is P2's clock frequency in GHz?",
                answer: "1.6",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "When is the data TLB earliest accessed in a pipeline?",
                options: [
                    "Before effective address calculation",
                    "During effective address calculation",
                    "After effective address calculation",
                    "After data cache lookup",
                ],
                answer: "After effective address calculation",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "A 3-stage pipeline has delays of 10, 20, and 14 ns. What is the execution time for 100 instructions?",
                answer: "2040",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "What is the speedup of a 2 GHz 5-stage pipeline over a 2.5 GHz non-pipelined processor (5 cycles/instruction), given certain stall percentages?",
                answer: "2.16",
            },
        ],
    },
    4: {
        //os
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A computer handles several interrupt sources. Which of the following will be handled at the HIGHEST priority?\n- Interrupt from CPU temperature sensor\n- Interrupt from Mouse\n- Interrupt from Keyboard\n- Interrupt from Hard Disk",
                options: [
                    "Interrupt from Hard Disk",
                    "Interrupt from Mouse",
                    "Interrupt from Keyboard",
                    "Interrupt from CPU temperature sensor",
                ],
                answer: "Interrupt from CPU temperature sensor",
            },
            {
                id: 2,
                type: "msq",
                question:
                    "Which one or more of the following need to be saved on a context switch from one thread (T1) of a process to another thread (T2) of the same process?",
                options: [
                    "Page table base register",
                    "Stack pointer",
                    "Program counter",
                    "General purpose registers",
                ],
                answer: [
                    "Stack pointer",
                    "Program counter",
                    "General purpose registers",
                ],
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the following statements about process state transitions for a system using preemptive scheduling.\nI. A running process can move to ready state.\nII. A ready process can move to running state.\nIII. A blocked process can move to running state.\nIV. A blocked process can move to ready state.\nWhich of the above statements are TRUE?",
                options: [
                    "I, II, III and IV",
                    "II and III only",
                    "I, II and IV only",
                    "I, II and III only",
                ],
                answer: "I, II and IV only",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The maximum number of processes that can be in Ready state for a computer system with n CPUs is:",
                options: ["n", "n^2", "2^n", "Independent of n"],
                answer: "Independent of n",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Let the time taken to switch between user and kernel modes of execution be T1 while the time taken to switch between two user processes be T2. Which of the following is TRUE?",
                options: [
                    "T1 > T2",
                    "T1 = T2",
                    "T1 < T2",
                    "Nothing can be said about the relation between T1 and T2",
                ],
                answer: "T1 < T2",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In the following process state transition diagram for a uniprocessor system, which statements are TRUE?\nI. If a process makes a transition D, it would result in another process making transition A immediately.\nII. A process P2 in blocked state can make transition E while another process P1 is in running state.\nIII. The OS uses preemptive scheduling.",
                options: ["I and II", "I and III", "II and III", "II and IV"],
                answer: "II and III",
            },
            {
                id: 7,
                type: "msq",
                question:
                    "Which one or more of the following CPU scheduling algorithms can potentially cause starvation?",
                options: [
                    "First-in First-Out",
                    "Round Robin",
                    "Priority Scheduling",
                    "Shortest Job First",
                ],
                answer: ["Priority Scheduling", "Shortest Job First"],
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider four processes P, Q, R, and S scheduled on a CPU as per round robin algorithm with a time quantum of 4 units. The processes arrive in the order P, Q, R, S, all at time t=0. There is exactly one context switch from S to Q, one from R to Q, and two from Q to R. There is no context switch from S to P. Which one of the following is NOT possible as CPU burst time (in time units) of these processes?",
                options: [
                    "P=4, Q=10, R=6, S=2",
                    "P=2, Q=9, R=5, S=1",
                    "P=4, Q=12, R=5, S=4",
                    "P=3, Q=7, R=7, S=3",
                ],
                answer: "P=3, Q=7, R=7, S=3",
            },
            {
                id: 9,
                type: "msq",
                question:
                    "Which of the following statement(s) is/are correct in the context of CPU scheduling?",
                options: [
                    "Turnaround time includes waiting time.",
                    "The goal is to only maximize CPU utilization and minimize throughput.",
                    "Round-robin policy can be used even when the CPU time required by each of the processes is not known apriori.",
                    "Implementing preemptive scheduling needs hardware support.",
                ],
                answer: [
                    "Turnaround time includes waiting time.",
                    "Round-robin policy can be used even when the CPU time required by each of the processes is not known apriori.",
                    "Implementing preemptive scheduling needs hardware support.",
                ],
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Three processes arrive at time zero with CPU bursts of 16, 20 and 10 milliseconds. If the scheduler has prior knowledge about the length of the CPU bursts, the minimum achievable average waiting time for these three processes in a non-preemptive scheduler (rounded to nearest integer) is _______ milliseconds.",
                answer: "12",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider the following set of processes: P1(8ms), P2(7ms), P3(2ms), P4(4ms), all arrived at time 0. For RR, TQ=4ms and order is P1,P2,P3,P4. What is the absolute difference between the average turnaround times (in ms) of SJF and RR?",
                answer: "5.25",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "Four processes (P1, P2, P3, P4) arrive at times 0, 1, 3, 4 with burst times 3, 1, 3, Z respectively. They run on a single processor using preemptive SRTF. If the average waiting time is 1 ms, what is the value of Z?",
                answer: "2",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Consider 5 processes with given arrival times, burst times, and priorities (0 is highest). What is the average waiting time (in ms) using preemptive priority scheduling?",
                answer: "29",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Consider four processes with given arrival times and burst times. If pre-emptive SRTF is used, what is the average waiting time across all processes in milliseconds?",
                answer: "3",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Consider four processes with given arrival times and burst lengths. Using preemptive SRTF, what is the average turnaround time in milliseconds?",
                answer: "8.25",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider an arbitrary set of CPU-bound processes with unequal CPU burst lengths submitted at the same time to a computer system. Which one of the following process scheduling algorithms would minimize the average waiting time in the ready queue?",
                options: [
                    "Shortest remaining time first",
                    "Round-robin with time quantum less than the shortest CPU burst",
                    "Uniform random",
                    "Highest priority first with priority proportional to CPU burst length",
                ],
                answer: "Shortest remaining time first",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "For the processes listed in the table, which of the following scheduling schemes will give the lowest average turnaround time? Processes A(0,3), B(1,6), C(4,4), D(6,2) where (arrival, processing time).",
                options: [
                    "First Come First Serve",
                    "Non-preemptive shortest job first",
                    "Shortest Remaining Time",
                    "Round Robin with Quantum value two",
                ],
                answer: "Shortest Remaining Time",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A uniprocessor system executes three tasks T1, T2, T3, arriving periodically at intervals of 3, 7, and 20 ms, with execution times of 1, 2, and 4 ms respectively. All tasks arrive at t=0. At what time (in ms) does the first instance of T3 complete its execution?",
                answer: "12",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "An OS uses SRTF for pre-emptive scheduling. Consider processes P1(0,12), P2(2,4), P3(3,6), P4(8,5) where (arrival, burst time). What is the average waiting time in milliseconds?",
                answer: "5.5",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Three processes A, B, C each loop 100 times, with CPU time (tc) and I/O time (tio) per iteration as follows: A(100,500), B(350,500), C(200,500). Processes are started at 0, 5, 10 ms respectively in a round-robin system (TQ=50ms). At what time (in ms) does C complete its first I/O operation?",
                answer: "1000",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "Consider the following set of processes to be scheduled on a single CPU: A(0,6), B(3,2), C(5,4), D(7,6), E(10,3) where (arrival, execution time). Using SRTF, what is the average process turnaround time in msec?",
                answer: "7.2",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A scheduling algorithm assigns priority proportional to the waiting time of a process. Every process starts with priority zero. The scheduler re-evaluates priorities every T time units. If processes have no I/O and all arrive at time zero, this algorithm is equivalent to:",
                options: [
                    "First-come first-serve algorithm",
                    "Round-robin algorithm",
                    "Shortest-job-first algorithm",
                    "Shortest-remaining-time-first algorithm",
                ],
                answer: "Round-robin algorithm",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider 3 processes, P1(0,5), P2(1,7), P3(3,4) where (arrival, required time). What is the completion order under FCFS and RR2 (round-robin with TQ=2)?",
                options: [
                    "FCFS: P1,P2,P3; RR2: P1,P2,P3",
                    "FCFS: P1,P3,P2; RR2: P1,P3,P2",
                    "FCFS: P1,P2,P3; RR2: P1,P3,P2",
                    "FCFS: P1,P3,P2; RR2: P1,P2,P3",
                ],
                answer: "FCFS: P1,P2,P3; RR2: P1,P3,P2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider three processes P0(0,9), P1(1,4), P2(2,9) where (arrival, burst time). Using pre-emptive SJF, what is the average waiting time?",
                options: ["5.0 ms", "4.33 ms", "6.33 ms", "7.33 ms"],
                answer: "5.0 ms",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following statements are true?\nI. Shortest remaining time first scheduling may cause starvation.\nII. Preemptive scheduling may cause starvation.\nIII. Round robin is better than FCFS in terms of response time.",
                options: [
                    "I only",
                    "I and III only",
                    "II and III only",
                    "I, II and III",
                ],
                answer: "I, II and III",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "If the time-slice used in the round-robin scheduling policy is more than the maximum time required to execute any process, then the policy will degenerate to:",
                options: [
                    "shortest job first",
                    "priority scheduling",
                    "first come first serve",
                    "None of the above",
                ],
                answer: "first come first serve",
            },
            {
                id: 12,
                type: "msq",
                question:
                    "Which one or more of the following options guarantee that a computer system will transition from user mode to kernel mode?",
                options: [
                    "Function Call",
                    "Malloc Call",
                    "Page Fault",
                    "System Call",
                ],
                answer: ["Page Fault", "System Call"],
            },
            {
                id: 13,
                type: "msq",
                question:
                    "Which of the following standard C library functions will always invoke a system call when executed from a single-threaded process in a UNIX/Linux operating system?",
                options: ["exit", "malloc", "sleep", "strlen"],
                answer: ["exit", "sleep"],
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The following C program is executed on a Unix/Linux system:\n#include<unistd.h>\nint main() {\n    int i;\n    for (i=0; i<10; i++)\n        if (i%2==0)\n            fork();\n    return 0;\n}\nThe total number of child processes created is ___________.",
                answer: "31",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "A process executes the code: fork(); fork(); fork(); The total number of child processes created is:",
                options: ["3", "4", "7", "8"],
                answer: "7",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A process executes the following code: for (i = 0; i < n; i++) fork(); The total number of child processes created is:",
                options: ["n", "2^n - 1", "2^n", "2^(n+1) - 1"],
                answer: "2^n - 1",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which of the following is/are shared by all the threads in a process?\nI. Program counter\nII. Stack\nIII. Address space\nIV. Registers",
                options: [
                    "I and II only",
                    "III only",
                    "IV only",
                    "III and IV only",
                ],
                answer: "III only",
            },
            {
                id: 3,
                type: "mcq",
                question: "Threads of a process share:",
                options: [
                    "global variables but not heap",
                    "heap but not global variables",
                    "neither global variables nor heap",
                    "both heap and global variables",
                ],
                answer: "both heap and global variables",
            },
            {
                id: 4,
                type: "mcq",
                question: "Which of the following is FALSE regarding threads?",
                options: [
                    "User level threads are not scheduled by the kernel.",
                    "When a user level thread is blocked, all other threads of its process are blocked.",
                    "Context switching between user level threads is faster than context switching between kernel level threads.",
                    "Kernel level threads cannot share the code segment.",
                ],
                answer: "Kernel level threads cannot share the code segment.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "A thread is usually defined as a “light weight process”. In relation to this, which of the following is TRUE?",
                options: [
                    "On a per-thread basis, the OS maintains only CPU register state.",
                    "The OS does not maintain a separate stack for each thread.",
                    "On per-thread basis, the OS does not maintain virtual memory state.",
                    "On per-thread basis, the OS maintains only scheduling and accounting information.",
                ],
                answer: "On per-thread basis, the OS does not maintain virtual memory state.",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the following proposed solution for the critical section problem. There are n processes. In the code, function pmax returns an integer not smaller than any of its arguments. Which one of the following is TRUE about the solution?",
                options: [
                    "At most one process can be in the critical section at any time.",
                    "The bounded wait condition is satisfied.",
                    "The progress condition is satisfied.",
                    "It cannot cause a deadlock.",
                ],
                answer: "At most one process can be in the critical section at any time.",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the following two-process synchronization solution with a shared variable `turn` initialized to zero. Process 0: `loop while(turn==1); ... turn=1;`. Process 1: `loop while(turn==0); ... turn=0;`. Which one of the following is TRUE?",
                options: [
                    "This is a correct two-process synchronization solution.",
                    "This solution violates mutual exclusion requirement.",
                    "This solution violates progress requirement.",
                    "This solution violates bounded wait requirement.",
                ],
                answer: "This solution violates progress requirement.",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Two processes X and Y use a synchronization construct with shared variables `varP` and `varQ` (both initialized to false). Process X: `varP=true; while(varQ==true) { ... varP=false;}`. Process Y: `varQ=true; while(varP==true) { ... varQ=false;}`. Which statement is true?",
                options: [
                    "The proposed solution prevents deadlock but fails to guarantee mutual exclusion.",
                    "The proposed solution guarantees mutual exclusion but fails to prevent deadlock.",
                    "The proposed solution guarantees mutual exclusion and prevents deadlock.",
                    "The proposed solution fails to prevent deadlock and fails to guarantee mutual exclusion.",
                ],
                answer: "The proposed solution prevents deadlock but fails to guarantee mutual exclusion.",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A busy-wait lock is implemented using `Fetch_And_Add(L, 1)` where L is an unsigned integer initialized to 0. This implementation:",
                options: [
                    "fails as L can overflow.",
                    "fails as L can take on a non-zero value when the lock is actually available.",
                    "works correctly but may starve some processes",
                    "works correctly without starvation.",
                ],
                answer: "fails as L can take on a non-zero value when the lock is actually available.",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The `enter_CS()` and `leave_CS()` functions are realized using `test-and-set(X)`. Which of the following statements are TRUE?\nI. The solution is deadlock free.\nII. The solution is starvation free.\nIII. Processes enter CS in FIFO order.\nIV. More than one process can enter CS at the same time.",
                options: ["I only", "I and II", "II and III", "IV only"],
                answer: "I only",
            },
            {
                id: 11,
                type: "msq",
                question:
                    "Consider a multi-threaded code segment invoked by two processes P1 and P2, each spawning two threads T1 and T2. Threads execute `foo()` which contains `Acquire L1; x=x+1; y=y+1; Release L1; print(y);`. Which statement(s) is/are correct?",
                options: [
                    "Both P1 and P2 will print the value of x as 2.",
                    "At least one of P1 and P2 will print the value of x as 4.",
                    "At least one of the threads will print the value of y as 2.",
                    "Both T1 and T2, in both the processes, will print the value of y as 1.",
                ],
                answer: [
                    "Both P1 and P2 will print the value of x as 2.",
                    "Both T1 and T2, in both the processes, will print the value of y as 1.",
                ],
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A multithreaded program P executes with x threads and uses y number of non-reentrant locks for ensuring mutual exclusion. What is the minimum value of x and y for which execution of P can result in a deadlock?",
                options: ["x=1, y=2", "x=2, y=1", "x=2, y=2", "x=1, y=1"],
                answer: "x=1, y=1",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Consider the methods used by processes P1 and P2 for accessing their critical sections: P1: `while(S1==S2); CS; S1=S2;` P2: `while(S1!=S2); CS; S2=not(S1);`. Which statement describes the properties achieved?",
                options: [
                    "Mutual exclusion but not progress",
                    "Progress but not mutual exclusion",
                    "Neither mutual exclusion nor progress",
                    "Both mutual exclusion and progress",
                ],
                answer: "Mutual exclusion but not progress",
            },
            {
                id: 14,
                type: "msq",
                question:
                    "Consider a resource owning scheme where a global lock L is used. If a resource R is owned by process P, another process can terminate P to acquire R. Which of the following is/are correct?",
                options: [
                    "The scheme ensures that deadlocks will not occur.",
                    "The scheme may lead to live-lock.",
                    "The scheme may lead to starvation.",
                    "The scheme violates the mutual exclusion property.",
                ],
                answer: [
                    "The scheme ensures that deadlocks will not occur.",
                    "The scheme may lead to live-lock.",
                    "The scheme may lead to starvation.",
                ],
            },
            {
                id: 15,
                type: "msq",
                question:
                    "Consider a pseudocode with a semaphore S initialized to 5. Five threads execute `parop()` which does `wait(S); wait(S); counter++; signal(S); signal(S);`. Which program behavior(s) is/are possible?",
                options: [
                    "The value of counter is 5 after all threads complete.",
                    "The value of counter is 1 after all threads complete.",
                    "The value of counter is 0 after all threads complete.",
                    "There is a deadlock involving all the threads.",
                ],
                answer: [
                    "The value of counter is 5 after all threads complete.",
                    "The value of counter is 1 after all threads complete.",
                    "There is a deadlock involving all the threads.",
                ],
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Each of a set of n processes executes a code using two semaphores a and b (initialized to 1 and 0). CODE_P: `wait(a); count++; if(count==n)signal(b); signal(a); wait(b); signal(b);`. What does the code achieve?",
                options: [
                    "It ensures no process executes CODE_Q before every process has finished CODE_P.",
                    "It ensures all processes execute CODE_P mutually exclusively.",
                    "It ensures that two processes are in CODE_Q at any time.",
                    "It ensures at most n-1 processes are in CODE_P at any time.",
                ],
                answer: "It ensures no process executes CODE_Q before every process has finished CODE_P.",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A non-negative counting semaphore S has 20 P(S) operations and 12 V(S) operations issued. What is the largest initial value of S for which at least one P(S) operation will remain blocked?",
                answer: "7",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the Producer-Consumer problem with semaphores `n=0`, `s=1`. The consumer does `semWait(n)` and the producer does `semSignal(n)`. Which one of the following is TRUE?",
                options: [
                    "The producer can add an item, but the consumer can never consume it.",
                    "The consumer will remove no more than one item from the buffer.",
                    "Deadlock occurs if the consumer acquires semaphore s when the buffer is empty.",
                    "The starting value for semaphore n must be 1 for deadlock-free operation.",
                ],
                answer: "Deadlock occurs if the consumer acquires semaphore s when the buffer is empty.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Two concurrent processes X and Y compute arrays `a` and `b` respectively, using binary semaphores R and S (both initialized to 0). Which of the following represents the CORRECT implementations of ExistsX and EntryY?",
                options: [
                    "ExitsX{P(R);V(S)} EntryY{P(S);V(R)}",
                    "ExitsX{V(R);V(S)} EntryY{P(R);P(S)}",
                    "ExitsX{P(S);V(R)} EntryY{V(S);P(R)}",
                    "ExitsX{V(R);P(S)} EntryY{V(S);P(R)}",
                ],
                answer: "ExitsX{P(S);V(R)} EntryY{V(S);P(R)}",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "A shared variable x, initialized to 0, is operated on by four concurrent processes W, X, Y, Z. W,X increment x; Y,Z decrement x. All use a counting semaphore S (initialized to 2) for access. What is the maximum possible value of x after all processes complete?",
                options: ["-2", "-1", "1", "2"],
                answer: "2",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Three concurrent processes X, Y, and Z execute P operations on semaphores a, b, c, and d. Which of the following represents a deadlock-free order of invoking the P operations?",
                options: [
                    "X:P(a)P(b)P(c), Y:P(b)P(c)P(d), Z:P(c)P(d)P(a)",
                    "X:P(b)P(a)P(c), Y:P(b)P(c)P(d), Z:P(a)P(c)P(d)",
                    "X:P(b)P(a)P(c), Y:P(c)P(b)P(d), Z:P(a)P(c)P(d)",
                    "X:P(a)P(b)P(c), Y:P(c)P(b)P(d), Z:P(a)P(c)P(d)",
                ],
                answer: "X:P(b)P(a)P(c), Y:P(b)P(c)P(d), Z:P(a)P(c)P(d)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "A program consists of 3 concurrent processes and 3 binary semaphores, initialized as S0=1, S1=0, S2=0. P0: `wait(S0); print '0'; release(S1); release(S2);`. P1: `wait(S1); release(S0);`. P2: `wait(S2); release(S0);`. How many times will process P0 print ‘0’?",
                options: [
                    "At least twice",
                    "Exactly twice",
                    "Exactly thrice",
                    "Exactly once",
                ],
                answer: "At least twice",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "P and V operations on a counting semaphore `s` are implemented using binary semaphores Xb and Yb. What are the correct initial values of Xb and Yb?",
                options: ["0 and 0", "0 and 1", "1 and 0", "1 and 1"],
                answer: "1 and 0",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A producer-consumer code uses binary semaphores S=1, Q=0. Which of the following is TRUE about the program?",
                options: [
                    "The process can deadlock",
                    "One of the threads can starve",
                    "Some items produced may be lost",
                    "Values generated by the producer will always be consumed before a new value is generated.",
                ],
                answer: "Values generated by the producer will always be consumed before a new value is generated.",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider `incr` and `decr` functions with a shared variable X=10. 5 threads invoke `incr` and 3 invoke `decr`. What are the minimum possible values of X (V1, V2) if the semaphore `s` is binary (init 1) vs counting (init 2)?",
                options: ["15, 7", "7, 7", "12, 7", "12, 8"],
                answer: "12, 7",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Three threads T1, T2, T3 execute `print` statements synchronized by binary semaphores S1, S2, S3. Which initialization would print the sequence BCABCABCA...?",
                options: [
                    "S1=1, S2=1, S3=1",
                    "S1=1, S2=1, S3=0",
                    "S1=1, S2=0, S3=0",
                    "S1=0, S2=1, S3=1",
                ],
                answer: "S1=1, S2=0, S3=0",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "In a producer-consumer solution with semaphores empty, full, mutex, what is the correct assignment to placeholders P, Q, R, S in `producer: wait(P), signal(Q); consumer: wait(R), signal(S)`?",
                options: [
                    "P:full, Q:full, R:empty, S:empty",
                    "P:empty, Q:empty, R:full, S:full",
                    "P:full, Q:empty, R:empty, S:full",
                    "P:empty, Q:full, R:full, S:empty",
                ],
                answer: "P:full, Q:empty, R:empty, S:full",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Three concurrent processes P1, P2, P3 access a shared variable D initialized to 100 as follows: P1: D=D+20, P2: D=D-50, P3: D=D+10. If the minimum and maximum possible values of D after completion are X and Y, what is Y-X?",
                answer: "80",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Two functions P1() and P2() share a variable B with an initial value of 2 and execute concurrently. P1: `C=B-1; B=2*C;`. P2: `D=2*B; B=D-1;`. How many distinct values can B possibly take after execution?",
                answer: "3",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider a snapshot of a system running n concurrent processes. Each process i holds Xi instances of resource R and can request at most Yi additional instances. Processes p and q have Yp=Yq=0. Which condition guarantees no other process can complete?",
                options: [
                    "Xp + Xq < Min{Yk}",
                    "Xp + Xq < Max{Yk}",
                    "Min(Xp, Xq) >= Min{Yk}",
                    "Min(Xp, Xq) <= Max{Yk}",
                ],
                answer: "Xp + Xq < Min{Yk}",
            },
        ],
        5: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A system has three types of resources: E, F, G. Four processes P0, P1, P2, P3 run concurrently. Given the Allocation and Max matrices, and available resources (3 E, 3 F), is the system in a safe state?",
                options: [
                    "The system is in safe state.",
                    "Not in safe state, but would be with one more E.",
                    "Not in safe state, but would be with one more F.",
                    "Not in safe state, but would be with one more G.",
                ],
                answer: "The system is in safe state.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A multithreaded program P has x threads and y non-reentrant locks. What are the minimum values of x and y for a deadlock to be possible?",
                options: ["x=1, y=2", "x=2, y=1", "x=2, y=2", "x=1, y=1"],
                answer: "x=1, y=1",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "A system shares 9 tape drives. Given the current allocation and maximum requirement for three processes, what is the current state of the system?",
                options: [
                    "Safe, Deadlocked",
                    "Safe, Not Deadlocked",
                    "Not Safe, Deadlocked",
                    "Not Safe, Not Deadlocked",
                ],
                answer: "Safe, Not Deadlocked",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the following policies for preventing deadlock in a system with mutually exclusive resources. Which can be used for preventing deadlock?\nI. Acquire all resources at start, release all if any is unavailable.\nII. Resources are numbered, requests are in increasing order.\nIII. Resources are numbered, requests are in decreasing order.\nIV. Request only for resources with a number larger than currently held ones.",
                options: [
                    "Any one of I and III but not II or IV",
                    "Any one of I, III and IV but not II",
                    "Any one of II and III but not I or IV",
                    "Any one of I, II, III and IV",
                ],
                answer: "Any one of I, II, III and IV",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "An OS uses Banker's algorithm for deadlock avoidance. Given the current system state (Allocation, Max, Available), and two independent requests REQ1 and REQ2, which of the following is TRUE?",
                options: [
                    "Only REQ 1 can be permitted.",
                    "Only REQ 2 can be permitted.",
                    "Both REQ 1 and REQ 2 can be permitted",
                    "Neither REQ1 nor REQ 2 can be permitted",
                ],
                answer: "Only REQ 2 can be permitted.",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following is NOT true of deadlock prevention and deadlock avoidance schemes?",
                options: [
                    "In deadlock prevention, the request for resources is always granted if the resulting state is safe",
                    "In deadlock avoidance, the request for resources is always granted if the resulting state is safe",
                    "Deadlock avoidance is less restrictive than deadlock prevention",
                    "Deadlock avoidance requires knowledge of resource requirements a priori.",
                ],
                answer: "In deadlock prevention, the request for resources is always granted if the resulting state is safe",
            },
            {
                id: 7,
                type: "msq",
                question:
                    "Which of the following statements is/are TRUE with respect to deadlocks?",
                options: [
                    "Circular wait is a necessary condition for the formation of deadlock.",
                    "In a system where each resource has more than one instance, a cycle in its wait-for graph indicates the presence of a deadlock.",
                    "If the current allocation leads to an unsafe state, deadlock will necessarily occur.",
                    "If every edge in the resource-allocation graph is an assignment edge, the system is not in deadlock state.",
                ],
                answer: [
                    "Circular wait is a necessary condition for the formation of deadlock.",
                    "If every edge in the resource-allocation graph is an assignment edge, the system is not in deadlock state.",
                ],
            },
            {
                id: 8,
                type: "nat",
                question:
                    "A system has 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. What is the largest value of K that will always avoid deadlock?",
                answer: "2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A system has 6 identical resources and N processes competing for them. Each process can request at most 2 resources. Which one of the following values of N could lead to a deadlock?",
                options: ["1", "2", "3", "4"],
                answer: "4",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A system contains three programs, and each requires three tape units for its operation. The minimum number of tape units which the system must have such that deadlocks never arise is ______.",
                answer: "7",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A system has n resources R0...Rn-1 and k processes P0...Pk-1. The resource request logic depends on whether process index i is even or odd. In which situation is a deadlock possible?",
                options: [
                    "n = 40, k = 26",
                    "n = 21, k = 12",
                    "n = 20, k = 10",
                    "n = 41, k = 19",
                ],
                answer: "n = 21, k = 12",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A system with 4 resource types (R1-R4) has 3 processes (P1, P2, P3) requesting resources at different times. If all three processes run concurrently starting at time t=0, which statement is TRUE?",
                options: [
                    "All processes will finish without any deadlock.",
                    "Only P1 and P2 will be in deadlock.",
                    "Only P1 and P3 will be in deadlock.",
                    "All three processes will be in deadlock",
                ],
                answer: "All processes will finish without any deadlock.",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "An OS implements a policy that requires a process to release all resources before making a request for another resource. Select the TRUE statement.",
                options: [
                    "Both starvation and deadlock can occur.",
                    "Starvation can occur but deadlock cannot occur.",
                    "Starvation cannot occur but deadlock can occur.",
                    "Neither starvation nor deadlock can occur.",
                ],
                answer: "Starvation can occur but deadlock cannot occur.",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider memory partitions of sizes 200, 400, 600, 500, 300, 250 KB. They are allotted to four processes of sizes 357, 210, 468, 491 KB. If the best fit algorithm is used, which partitions are NOT allotted?",
                options: [
                    "200 KB and 300 KB",
                    "200 KB and 250 KB",
                    "250 KB and 300 KB",
                    "300 KB and 400 KB",
                ],
                answer: "200 KB and 300 KB",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "A computer system with 57-bit virtual addressing uses multi-level tree-structured page tables with L levels. The page size is 4 KB and a page table entry is 8 bytes. The value of L is______.",
                answer: "5",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which one of the following statements about memory allocation is TRUE, assuming a new smaller hole is created after allocation?",
                options: [
                    "The hole created by next fit is never larger than the hole created by best fit.",
                    "The hole created by first fit is always larger than the hole created by next fit.",
                    "The hole created by best fit is never larger than the hole created by first fit.",
                    "The hole created by worst fit is always larger than the hole created by first fit.",
                ],
                answer: "The hole created by best fit is never larger than the hole created by first fit.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which of the following statements about paging is FALSE?",
                options: [
                    "The TLB performs an associative search in parallel on all its valid entries.",
                    "If a TLB hit occurs but a cache miss follows, the word will always be in main memory.",
                    "The memory access time using an inverted page table is always the same for all virtual addresses.",
                    "In a system with hashed page tables, if two addresses hash to the same value, their access times will not be the same.",
                ],
                answer: "The memory access time using an inverted page table is always the same for all virtual addresses.",
            },
            {
                id: 3,
                type: "msq",
                question:
                    "In the context of operating systems, which of the following statements is/are correct with respect to paging?",
                options: [
                    "Paging helps solve the issue of external fragmentation",
                    "Page size has no impact on internal fragmentation",
                    "Paging incurs memory overheads",
                    "Multi-level paging is necessary to support pages of different sizes",
                ],
                answer: [
                    "Paging helps solve the issue of external fragmentation",
                    "Paging incurs memory overheads",
                ],
            },
            {
                id: 4,
                type: "nat",
                question:
                    "A three-level page table translates a 39-bit virtual address. Page size is 4KB, and PTE size is 8 bytes. A process uses 2GB of virtual memory. What is the minimum memory required for its page tables in KB?",
                answer: "4108",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A system has 40-bit virtual addressing and 16KB page size. With a one-level page table where each PTE is 48 bits, what is the size of the per-process page table in megabytes?",
                answer: "384",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A system uses 8KB pages and has a 32-bit physical address space. Each PTE contains valid, dirty, 3 permission bits, and the translation. If the max page table size is 24 MB, what is the length of the virtual address in bits?",
                answer: "36",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A system has a 40-bit virtual address, 8KB page size, and a 128-entry TLB organized into 32 sets (4-way). What is the minimum length of the TLB tag in bits?",
                answer: "22",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "A system with byte-addressable memory has 32-bit logical addresses, 4KB page size, and 4-byte PTEs. What is the size of the page table in megabytes?",
                answer: "4",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "A paging hardware has a TLB. TLB search takes 10 ms, physical memory access takes 80 ms. If the TLB hit ratio is 0.6, what is the effective memory access time in milliseconds?",
                answer: "112",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A computer uses a 46-bit virtual address, 32-bit physical address, and a three-level paged page table. The PTE is 32 bits. The processor has a 1MB 16-way set associative cache with a 64-byte block size. What is the page size in KB?",
                options: ["2", "4", "8", "16"],
                answer: "8",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What are the essential content(s) in each entry of a page table?",
                options: [
                    "Virtual page number",
                    "Page frame number",
                    "Both virtual page number and page frame number",
                    "Access right information",
                ],
                answer: "Page frame number",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Why is a multilevel page table preferred over a single-level page table?",
                options: [
                    "It reduces memory access time.",
                    "It helps to reduce the size of the page table.",
                    "It is required by the TLB.",
                    "It helps to reduce the number of page faults.",
                ],
                answer: "It helps to reduce the size of the page table.",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A processor uses 36-bit physical addresses and 32-bit virtual addresses, with a 4KB page frame size. A three-level page table is used. What are the bits required for addressing the next level page table in the first, second, and third level entries?",
                options: [
                    "20, 20, 20",
                    "24, 24, 24",
                    "24, 24, 20",
                    "25, 25, 24",
                ],
                answer: "24, 24, 20",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A paging scheme uses a TLB. A TLB-access takes 10 ns and a main memory access takes 50 ns. What is the effective access time (in ns) if the TLB hit ratio is 90% and there is no page-fault?",
                options: ["54", "60", "65", "75"],
                answer: "65",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Consider the C code `int D[128][128];`. Demand paging is used, and each page frame holds 512 elements of D. LRU policy is used. A process with 30 page frames executes `for(i=0;i<128;i++) for(j=0;j<128;j++) D[j][i]*=10;`. How many page faults are generated?",
                answer: "4096",
            },
        ],
        7: [
            {
                id: 1,
                type: "nat",
                question:
                    "A demand paging system has 4 page frames (initially empty) and uses LRU. For the reference string 7,2,7,3,2,5,3,4,6,7,7,1,5,6,1, what is the page fault rate (rounded to one decimal place)?",
                answer: "0.6",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "A paging system has a 1-level page table and a TLB. Main memory access is 100ns, TLB lookup is 20ns, disk transfer is 5000ns. TLB hit ratio is 95%, page fault rate is 10%. 20% of page faults involve a dirty page. What is the average memory access time in ns?",
                answer: "154.5",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Virtual addresses are 64 bits, physical addresses are 48 bits. Memory is word addressable. Page size is 8KB, word size is 4 bytes. The TLB has 128 valid entries. At most how many distinct virtual addresses can be translated without any TLB miss?",
                options: ["16 x 2^10", "256 x 2^10", "4 x 2^20", "8 x 2^20"],
                answer: "256 x 2^10",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A process uses demand paging. Average memory access time is M if page is in memory, and D if page fault occurs. The measured average access time is X. What is the correct expression for the page fault rate?",
                options: [
                    "(D-M)/(X-M)",
                    "(X-M)/(D-M)",
                    "(D-X)/(D-M)",
                    "(X-M)/(D-X)",
                ],
                answer: "(X-M)/(D-M)",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A system has 10 physical page frames. It is provided with an access sequence (a1...a20, a1...a20), where each ai is a distinct virtual page. What is the difference in page faults between FIFO and Optimal replacement policies?",
                answer: "1",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Page fault service time is 10 ms, average memory access time is 20 ns. If one page fault is generated for every 10^6 memory accesses, what is the effective access time?",
                options: ["21 ns", "30 ns", "23 ns", "35 ns"],
                answer: "30 ns",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Match the flag bits (List-I) with their purposes (List-II) in virtual memory management.\nList-I: I. Dirty, II. R/W, III. Reference, IV. Valid\nList-II: a. Page init, b. Write-back, c. Page protection, d. Page replacement",
                options: [
                    "I-d,II-a,III-b,IV-c",
                    "I-b,II-c,III-a,IV-d",
                    "I-c,II-d,III-a,IV-b",
                    "I-b,II-c,III-d,IV-a",
                ],
                answer: "I-b,II-c,III-d,IV-a",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "In which one of the following page replacement policies may Belady’s anomaly occur?",
                options: ["FIFO", "Optimal", "LRU", "MRU"],
                answer: "FIFO",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the statements:\nS1: Random page replacement algorithm suffers from Belady’s anomaly.\nS2: LRU page replacement algorithm suffers from Belady’s anomaly.\nWhich of the following is CORRECT?",
                options: [
                    "S1 is true, S2 is true",
                    "S1 is true, S2 is false",
                    "S1 is false, S2 is true",
                    "S1 is false, S2 is false",
                ],
                answer: "S1 is true, S2 is false",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "In which one of the following page replacement algorithms is it possible for the page fault rate to increase even when the number of allocated frames increases?",
                options: [
                    "LRU (Least Recently Used)",
                    "OPT (Optimal Page Replacement)",
                    "MRU (Most Recently Used)",
                    "FIFO (First In First Out)",
                ],
                answer: "FIFO (First In First Out)",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "For a main memory with five-page frames and reference string 3,8,2,3,9,1,6,3,8,9,3,6,2,1,3, which is true for FIFO and LRU replacement policies?",
                options: [
                    "Both incur the same number of page faults",
                    "FIFO incurs 2 more page faults than LRU",
                    "LRU incurs 2 more page faults than FIFO",
                    "FIFO incurs 1 more page fault than LRU",
                ],
                answer: "Both incur the same number of page faults",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "A system uses 3 page frames and LRU. For the reference string 4,7,6,1,7,6,1,2,7,2, what is the total number of page faults?",
                answer: "6",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A computer has 20 physical page frames (101-120). A program accesses pages 1...100 in order, and repeats this THRICE. Which policy has the same number of page faults as the optimal policy?",
                options: [
                    "Least-recently-used",
                    "First-in-first-out",
                    "Last-in-first-out",
                    "Most-recently-used",
                ],
                answer: "Most-recently-used",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "With 3 initially empty page frames and reference string 1,2,3,4,2,1,5,3,2,4,6, what is the number of page faults using the optimal replacement policy?",
                answer: "7",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "For the virtual page reference string 1,2,3,2,4,1,3,2,4,1 and 3 page frames, how do the number of page faults for LRU, FIFO, and OPTIMAL compare?",
                options: [
                    "OPTIMAL < LRU < FIFO",
                    "OPTIMAL < FIFO < LRU",
                    "OPTIMAL = LRU",
                    "OPTIMAL = FIFO",
                ],
                answer: "OPTIMAL < FIFO < LRU",
            },
        ],
        8: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A system uses FIFO for page replacement with 4 page frames. It first accesses 100 distinct pages, then accesses the same 100 pages in reverse order. How many page faults will occur?",
                options: ["196", "192", "197", "195"],
                answer: "196",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A main memory has 4 pages (16 bytes each), initially empty. For a sequence of virtual addresses and LRU policy, how many page faults occur and what are the final page numbers in memory?",
                options: [
                    "6 and 1,2,3,4",
                    "7 and 1,2,4,5",
                    "8 and 1,2,4,5",
                    "9 and 1,2,3,5",
                ],
                answer: "7 and 1,2,4,5",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Two file systems A (contiguous) and B (linked) store a 100-block file. To insert a new block between the 50th and 51st blocks, the number of disk accesses required are nA and nB. What is nA + nB?",
                answer: "153",
            },
            {
                id: 4,
                type: "msq",
                question:
                    "In a linear list-based directory `foo`, which operations necessarily require a full scan of `foo` for successful completion?",
                options: [
                    "Creation of a new file in foo",
                    "Deletion of an existing file from foo",
                    "Renaming of an existing file in foo",
                    "Opening of an existing file in foo",
                ],
                answer: [
                    "Creation of a new file in foo",
                    "Renaming of an existing file in foo",
                ],
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "For a disk scheduler queue with requests (P,155), (Q,85), (R,110), (S,30), (T,115) and head at 100 using SSTF, which statement is FALSE?",
                options: [
                    "R is serviced before P",
                    "Q is serviced after S but before T",
                    "T is serviced before P",
                    "The head reverses direction between servicing of Q and P",
                ],
                answer: "Q is serviced after S but before T",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A disk with 4 platters, 200 cylinders, 256 sectors/track has 6 requests. Head is at cylinder 80, sector 100, moving to higher cylinders. Using SSTF, what is the total power consumption in milliwatts to satisfy all requests?",
                answer: "85",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A disk queue has requests for cylinders 47,38,121,191,87,11,92,10. The head is at 63, moving towards larger numbers. Using C-LOOK, what is the total head movement?",
                answer: "346",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "For a disk with 100 tracks and request sequence 45,20,90,10,50,60,80,25,70 (head at 50), what is the additional distance traversed by SSTF compared to SCAN (moving towards 100)?",
                options: ["8", "9", "10", "11"],
                answer: "10",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "A disk has 201 cylinders (0-200), arm at 100. Requests are for 30,85,90,100,105,110,135,145. Using SSTF, cylinder 90 is serviced after how many requests?",
                answer: "3",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A multilevel page table is preferred over a single-level one because it:",
                options: [
                    "reduces memory access time",
                    "helps to reduce the size of the page table needed",
                    "is required by the TLB",
                    "helps to reduce page faults",
                ],
                answer: "helps to reduce the size of the page table needed",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A disk system with 100 cylinders has requests for 4,34,10,7,19,73,2,15,6,20. Head is at cylinder 50. Using SSTF (1ms/cylinder move), what is the total time to satisfy all requests?",
                options: ["95 ms", "119 ms", "233 ms", "276 ms"],
                answer: "119 ms",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "A Unix-like inode has 12 direct, 1 single-indirect, 1 double-indirect pointers. Disk block size is 4KB, block address is 32 bits. What is the maximum possible file size in GB?",
                answer: "4",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "In a file allocation system, which scheme(s) can be used if no external fragmentation is allowed?",
                options: [
                    "Contiguous and Indexed",
                    "Linked only",
                    "Indexed only",
                    "Linked and Indexed",
                ],
                answer: "Linked and Indexed",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "A FAT-based file system is on a 100x10^6 byte disk. FAT entry is 4 bytes, data block size is 10^3 bytes. What is the maximum size of a file that can be stored in units of 10^6 bytes?",
                answer: "99.6",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "A file system on a 300 GByte disk uses a file descriptor with 8 direct, 1 indirect, and 1 doubly indirect block address. Disk block size is 128 Bytes, block address is 8 Bytes. What is the maximum possible file size?",
                options: [
                    "3 KBytes",
                    "35 KBytes",
                    "280 KBytes",
                    "dependent on the size of the disk",
                ],
                answer: "35 KBytes",
            },
        ],
        9: [
            {
                id: 1,
                type: "mcq",
                question:
                    "The data blocks of a very large file in the Unix file system are allocated using:",
                options: [
                    "Contiguous allocation",
                    "Linked allocation",
                    "Indexed allocation",
                    "An extension of indexed allocation",
                ],
                answer: "An extension of indexed allocation",
            },
            {
                id: 2,
                type: "mcq",
                question: "The primary purpose of an operating system is:",
                options: [
                    "To make the computer easier to use",
                    "To manage hardware resources",
                    "To provide a platform for software to run",
                    "All of the above",
                ],
                answer: "All of the above",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Thrashing in an operating system is a phenomenon where:",
                options: [
                    "The system spends more time paging than executing",
                    "The CPU is idle for long periods",
                    "A process is blocked indefinitely",
                    "The system crashes due to memory overflow",
                ],
                answer: "The system spends more time paging than executing",
            },
            {
                id: 4,
                type: "mcq",
                question: "A semaphore is a variable used for:",
                options: [
                    "Counting events",
                    "Process synchronization",
                    "Memory management",
                    "File system management",
                ],
                answer: "Process synchronization",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which of the following is a non-preemptive scheduling algorithm?",
                options: [
                    "Round Robin",
                    "First-Come, First-Served",
                    "Shortest Remaining Time First",
                    "Priority Scheduling (preemptive)",
                ],
                answer: "First-Come, First-Served",
            },
            {
                id: 6,
                type: "mcq",
                question: "A process can be in which of the following states?",
                options: [
                    "New, Ready, Running, Waiting, Terminated",
                    "New, Open, Active, Idle, Closed",
                    "Start, Execute, Hold, Stop",
                    "Create, Run, Pause, End",
                ],
                answer: "New, Ready, Running, Waiting, Terminated",
            },
            {
                id: 7,
                type: "mcq",
                question: "The Banker's algorithm is used for:",
                options: [
                    "Deadlock prevention",
                    "Deadlock detection",
                    "Deadlock avoidance",
                    "Deadlock recovery",
                ],
                answer: "Deadlock avoidance",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "What is a 'zombie' process in a UNIX-like operating system?",
                options: [
                    "A process that has been terminated but its entry still exists in the process table",
                    "A process that cannot be killed",
                    "A process that is running in the background",
                    "A process that has spawned other processes",
                ],
                answer: "A process that has been terminated but its entry still exists in the process table",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which of the following is a necessary condition for deadlock?",
                options: [
                    "Mutual Exclusion",
                    "Hold and Wait",
                    "No Preemption",
                    "All of the above",
                ],
                answer: "All of the above",
            },
            {
                id: 10,
                type: "mcq",
                question: "In a paged memory system, the page table contains:",
                options: [
                    "The base address of each page in physical memory",
                    "The size of each page",
                    "The access rights for each page",
                    "The physical address of the process control block",
                ],
                answer: "The base address of each page in physical memory",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the primary function of a Translation Lookaside Buffer (TLB)?",
                options: [
                    "To speed up the translation of virtual addresses to physical addresses",
                    "To store recently used instructions",
                    "To manage I/O requests",
                    "To buffer data for network transmission",
                ],
                answer: "To speed up the translation of virtual addresses to physical addresses",
            },
            {
                id: 12,
                type: "mcq",
                question: "What does a `fork()` system call do?",
                options: [
                    "Creates a new thread",
                    "Creates a new process which is a copy of the parent",
                    "Terminates the current process",
                    "Executes a new program",
                ],
                answer: "Creates a new process which is a copy of the parent",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which disk scheduling algorithm services requests in the order they arrive in the queue?",
                options: ["SSTF", "SCAN", "C-SCAN", "FCFS"],
                answer: "FCFS",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Internal fragmentation occurs in which memory allocation scheme?",
                options: [
                    "Segmentation",
                    "Paging",
                    "Dynamic partitioning",
                    "All of the above",
                ],
                answer: "Paging",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "The 'critical section' in concurrent programming refers to:",
                options: [
                    "A section of code that is executed by the kernel",
                    "A section of code that accesses shared resources",
                    "A section of code that handles interrupts",
                    "A section of code that is never executed",
                ],
                answer: "A section of code that accesses shared resources",
            },
        ],
        10: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following is a solution to the critical section problem?",
                options: [
                    "Test-and-Set instruction",
                    "Semaphore",
                    "Mutex lock",
                    "All of the above",
                ],
                answer: "All of the above",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which memory management technique suffers from external fragmentation?",
                options: [
                    "Paging",
                    "Segmentation",
                    "Fixed partitioning",
                    "Both B and C",
                ],
                answer: "Both B and C",
            },
            {
                id: 3,
                type: "mcq",
                question: "A system is in a safe state if:",
                options: [
                    "There is no deadlock",
                    "The system can allocate resources to each process in some order and still avoid a deadlock",
                    "All processes can finish execution",
                    "The system has enough resources for all processes",
                ],
                answer: "The system can allocate resources to each process in some order and still avoid a deadlock",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which of the following is NOT one of the four necessary conditions for deadlock?",
                options: [
                    "Mutual Exclusion",
                    "Hold and Wait",
                    "No Preemption",
                    "Starvation",
                ],
                answer: "Starvation",
            },
            {
                id: 5,
                type: "mcq",
                question: "The concept of virtual memory is implemented by:",
                options: [
                    "Demand Paging",
                    "Segmentation",
                    "Swapping",
                    "All of the above",
                ],
                answer: "Demand Paging",
            },
            {
                id: 6,
                type: "mcq",
                question: "In a file system, a directory is essentially a:",
                options: [
                    "File containing a list of files and their attributes",
                    "A physical location on the disk",
                    "A type of process",
                    "A memory management unit",
                ],
                answer: "File containing a list of files and their attributes",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which of the following disk scheduling algorithms is generally considered to provide the best performance in terms of minimizing average seek time?",
                options: ["FCFS", "SSTF", "SCAN", "LOOK"],
                answer: "SSTF",
            },
            {
                id: 8,
                type: "mcq",
                question: "What is the role of the 'long-term scheduler'?",
                options: [
                    "To select which processes should be brought into the ready queue",
                    "To select which process should be executed next and allocates CPU",
                    "To select which processes should be swapped out to disk",
                    "To handle I/O operations",
                ],
                answer: "To select which processes should be brought into the ready queue",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "The Process Control Block (PCB) does NOT contain which of the following?",
                options: [
                    "Process state",
                    "Program counter",
                    "CPU registers",
                    "The process's executable code",
                ],
                answer: "The process's executable code",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What is 'aging' in the context of priority scheduling?",
                options: [
                    "A technique of gradually increasing the priority of processes that wait in the system for a long time",
                    "A technique to reduce the priority of processes that use too much CPU time",
                    "The process of removing old processes from the system",
                    "A technique to allocate memory to older processes first",
                ],
                answer: "A technique of gradually increasing the priority of processes that wait in the system for a long time",
            },
            {
                id: 11,
                type: "mcq",
                question: "A 'pipe' in an operating system is a mechanism for:",
                options: [
                    "Inter-process communication",
                    "Hardware device control",
                    "Kernel-level threading",
                    "Virtual memory management",
                ],
                answer: "Inter-process communication",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Which file allocation method is free from external fragmentation?",
                options: ["Contiguous", "Linked", "Indexed", "Both B and C"],
                answer: "Both B and C",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A `wait()` system call in a parent process is used to:",
                options: [
                    "Wait for a child process to terminate",
                    "Wait for an I/O operation to complete",
                    "Wait for a signal from another process",
                    "Wait for a specific amount of time",
                ],
                answer: "Wait for a child process to terminate",
            },
            {
                id: 14,
                type: "mcq",
                question: "The 'spooling' concept is used to handle:",
                options: [
                    "CPU scheduling",
                    "Memory allocation",
                    "I/O operations for a device like a printer",
                    "File system consistency",
                ],
                answer: "I/O operations for a device like a printer",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following page replacement algorithms suffers from Belady's Anomaly?",
                options: ["LRU", "Optimal", "FIFO", "LFU"],
                answer: "FIFO",
            },
        ],
    },
    5: {
        //dbms
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which one of the options given below refers to the degree (or arity) of a relation in relational database systems?",
                options: [
                    "Number of attributes of its relation schema.",
                    "Number of tuples stored in the relation.",
                    "Number of entries in the relation.",
                    "Number of distinct domains of its relation schema.",
                ],
                answer: "Number of attributes of its relation schema.",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider a relation R(A, B, C, D, E) with FDs: AB→C; BC→D; C→E. The number of super keys in the relation R is _________.",
                answer: "8",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "In a relational data model, which one of the following statements is TRUE?",
                options: [
                    "A relation with only two attributes is always in BCNF.",
                    "If all attributes of a relation are prime attributes, then the relation is in BCNF.",
                    "Every relation has at least one non-prime attribute.",
                    "BCNF decompositions preserve functional dependencies.",
                ],
                answer: "A relation with only two attributes is always in BCNF.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Suppose a database system crashes again while recovering from a previous crash, and checkpointing is not done. Which of the following statement is/are correct?",
                options: [
                    "The same undo and redo list will be used while recovering again",
                    "The system cannot recover any further",
                    "All the transactions that are already undone and redone will not be recovered again",
                    "The database will become inconsistent",
                ],
                answer: "The same undo and redo list will be used while recovering again",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider a schedule S with four transactions: R4(x)R2(x)R3(x)R1(y)W1(y)W2(x)W3(y)R4(y). Which one of the following serial schedules is conflict equivalent to S?",
                options: [
                    "T1→T3→T4→T2",
                    "T1→T4→T3→T2",
                    "T4→T1→T3→T2",
                    "T3→T1→T4→T2",
                ],
                answer: "T1→T3→T4→T2",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the statements:\nI. Strict two-phase locking protocol generates conflict serializable schedules that are also recoverable.\nII. Timestamp-ordering concurrency control protocol with Thomas Write Rule can generate view serializable schedules that are not conflict serializable.\nWhich statements are True?",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "Both I and II",
            },
            {
                id: 7,
                type: "msq",
                question:
                    "Consider relations Employee(eId, Name), Brand(bId, bName), Own(eId, bId). Which relational algebra expressions return the set of eIds who own all the brands?",
                options: [
                    "ΠeId (ΠeId,bId(Own) / ΠbId(Brand))",
                    "ΠeId(Own) – ΠeId((ΠeId(Own) × ΠbId(Brand)) – ΠeId,bId(Own))",
                    "ΠeId (ΠeId,bId(Own)/ΠbId(Own))",
                    "Π_eld ((ΠeId(Own)×ΠbId(Own))/Π_bld(Brand))",
                ],
                answer: [
                    "ΠeId (ΠeId,bId(Own) / ΠbId(Brand))",
                    "ΠeId(Own) – ΠeId((ΠeId(Own) × ΠbId(Brand)) – ΠeId,bId(Own))",
                ],
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider the table named Student with columns Roll Num, Name, Gender, Marks. The SQL query `SELECT * FROM Student WHERE gender = ‘F’ AND marks > 65;` is executed. How many rows are returned?",
                answer: "2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which of the following SQL query options will always find the addresses of theaters with maximum capacity from a Cinema(theater, address, capacity) table?",
                options: [
                    "WHERE P1.capacity >= All (select P2.capacity from Cinema P2)",
                    "WHERE P1.capacity >= Any (select P2.capacity from Cinema P2)",
                    "WHERE P1.capacity > All (select max(P2.capacity) from Cinema P2)",
                    "WHERE P1.capacity > Any(select max(P2.capacity) from Cinema P2)",
                ],
                answer: "WHERE P1.capacity >= All (select P2.capacity from Cinema P2)",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A file is organized so that the ordering of data records is the same as or close to the ordering of data entries in some index. That index is called:",
                options: ["Dense", "Sparse", "Clustered", "Unclustered"],
                answer: "Clustered",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider a database implemented using a B+ tree for file indexing on a disk with a 4 KB block size. Search key is 12 bytes, tree/disk pointer is 8 bytes. The database has one million records. What is the minimum number of disk accesses required to retrieve any record?",
                answer: "4",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A B-tree of order 4 is built from scratch by 10 successive insertions. What is the maximum number of node splitting operations that may take place?",
                options: ["3", "4", "5", "6"],
                answer: "5",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram?",
                options: [
                    "Diamonds with double/bold border.",
                    "Ovals with double/bold border",
                    "Ovals that contain underlined identifiers",
                    "Rectangles with double/bold border",
                ],
                answer: "Diamonds with double/bold border.",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Consider the database schema CR(StudentName, CourseName). Given an instance, what is the number of rows returned by the query T2 <- CR ÷ (π_courseName(σ_StudentName='SA'(CR)))?",
                answer: "4",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following is NOT a super key in a relational schema with attributes V, W, X, Y, Z and primary key VY?",
                options: ["VXYZ", "VWXZ", "VWXY", "VWXYZ"],
                answer: "VWXZ",
            },
        ],
        2: [
            {
                id: 1,
                type: "nat",
                question:
                    "Given the STUDENTS relation, for (Student Name, Student Age) to be a key for this instance, the value X should NOT be equal to ______.",
                answer: "19",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "What is the maximum number of superkeys for the relation schema R (E, F, G, H) with E as the key?",
                answer: "8",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider a relational table R that is in 3 NF, but not in BCNF. Which one of the following statements is TRUE?",
                options: [
                    "R has a non-trivial functional dependency X->A, where X is not a superkey and A is a prime attribute.",
                    "R has a non-trivial functional dependency X->A, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.",
                    "R has a non-trivial functional dependency X->A, where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.",
                    "A cell in R holds a set instead of an atomic value.",
                ],
                answer: "R has a non-trivial functional dependency X->A, where X is not a superkey and A is a prime attribute.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Suppose a database schedule S involves transactions T1...Tn. If S is serializable, which ordering of the precedence graph vertices is guaranteed to yield a serial schedule?",
                options: [
                    "Topological order",
                    "Depth-first order",
                    "Breadth-first order",
                    "Ascending order of transaction indices",
                ],
                answer: "Topological order",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider a schedule of operations of three transactions T1, T2, T3: R2(Y), R1(X), R3(Z), R1(Y), W1(X), R2(Z), W2(Y), R3(X), W3(Z). Which choice is correct?\nP: S is conflict-serializable.\nQ: If T3 commits before T1 finishes, then S is recoverable.",
                options: [
                    "Both P and Q are true.",
                    "P is true and Q is false.",
                    "P is false and Q is true.",
                    "Both P and Q are false.",
                ],
                answer: "P is true and Q is false.",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In a database system, unique timestamps are assigned to each transaction. T1 holds a lock on R, and T2 requests a conflicting lock. The deadlock prevention algorithm is: if TS(T2)<TS(T1) then T1 is killed else T2 waits. Which statement is TRUE?",
                options: [
                    "The system is both deadlock-free and starvation-free.",
                    "The system is deadlock-free, but not starvation-free.",
                    "The system is starvation-free, but not deadlock-free.",
                    "The system is neither deadlock-free nor starvation-free.",
                ],
                answer: "The system is both deadlock-free and starvation-free.",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A relation r(A, B) has 1200 tuples. Attribute A has integer values from 6 to 20, and attribute B has values from 1 to 20. Attributes are independently distributed. The estimated number of tuples in the output of σ(A>10) V (B=18) (r) is:",
                answer: "820",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider the relational database with schemas Student, Dept, Course, Register. The SQL query `SELECT * FROM Student AS S WHERE NOT EXISTS (SELECT cNo FROM Course WHERE dNo = 'D01' EXCEPT SELECT cNo FROM Register WHERE sNo=S.sNo)` is executed. How many rows are returned?",
                answer: "2",
            },
            {
                id: 9,
                type: "mcq",
                question: "SELECT operation in SQL is equivalent to:",
                options: [
                    "the selection operation in relational algebra",
                    "the selection operation in relational algebra except that SELECT in SQL retains duplicates",
                    "the projection operation in relational algebra",
                    "the projection operation in relational algebra, except that SELECT in SQL retains duplicates",
                ],
                answer: "the projection operation in relational algebra, except that SELECT in SQL retains duplicates",
            },
            {
                id: 10,
                type: "mcq",
                question: "An index is clustered, if:",
                options: [
                    "it is on a set of fields that form a candidate key.",
                    "it is on a set of fields that include the primary key.",
                    "the data record of the file are organized in the same order as the date entries of the index",
                    "the data records of the file are organized not in the same order as the data entries of the index.",
                ],
                answer: "the data record of the file are organized in the same order as the date entries of the index",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "In a B+ tree, if the search-key value is 8 bytes long, the block size is 512 bytes and the block pointer size is 2 bytes, then the maximum order of the B+ tree is _____________.",
                answer: "52",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "The maximum number of times leaf nodes would get split up as a result of inserting keys 10, 3, 6, 8, 4, 2, 1 into an initially empty B+-tree with internal node order 3 and leaf node order 2 is:",
                options: ["2", "3", "4", "5"],
                answer: "4",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "In an Entity-Relationship (ER) model, suppose R is a many-to-one relationship from entity set E1 to entity set E2. E1 and E2 participate totally in R and cardinality of E1 > cardinality of E2. Which statement is true?",
                options: [
                    "Every entity in E1 is associated with exactly one entity in E2.",
                    "Some entity in E1 is associated with more than one entity in E2.",
                    "Every entity in E2 is associated with exactly one entity in E1.",
                    "Every entity in E2 is associated with at most one entity in E1.",
                ],
                answer: "Every entity in E1 is associated with exactly one entity in E2.",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which of the following is an INCORRECT statement about relational models?",
                options: [
                    "An attribute of an entity can have more than one value.",
                    "An attribute of an entity can be composite.",
                    "In a row of a relational table, an attribute can have more than one value.",
                    "In a row of a relational table, an attribute can have exactly one value or a NULL value.",
                ],
                answer: "In a row of a relational table, an attribute can have more than one value.",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the relation scheme R = (E, F, G, H, I, J, K, L, M, N ) and the set of FDs {{E, F}}→{G}, {F}→{I, J}, {E, H}→{K, L}, {K}→{M}, {L}→{N}} on R. What is the key for R?",
                options: ["{E, F}", "{E, F, H}", "{E, F, H, K, L}", "{E}"],
                answer: "{E, F, H}",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A prime attribute of a relation scheme R is an attribute that appears:",
                options: [
                    "in all candidate keys of R.",
                    "in some candidate key of R.",
                    "in a foreign key of R.",
                    "only in the primary key of R.",
                ],
                answer: "in some candidate key of R.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Relation R has eight attributes ABCDEFGH. Fields of R contain only atomic values. F = {CH->G, A->BC, B->CFH, E->A, F->EG}. How many candidate keys does the relation R have?",
                options: ["3", "4", "5", "6"],
                answer: "4",
            },
            {
                id: 3,
                type: "mcq",
                question: "Which of the following is TRUE about 3NF and BCNF?",
                options: [
                    "Every relation in 3NF is also in BCNF",
                    "A relation R is in 3NF if every non-prime attribute of R is fully functionally dependent on every key of R",
                    "Every relation in BCNF is also in 3NF",
                    "No relation can be in both BCNF and 3NF",
                ],
                answer: "Every relation in BCNF is also in 3NF",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which one of the following is NOT a part of the ACID properties of database transactions?",
                options: [
                    "Atomicity",
                    "Consistency",
                    "Isolation",
                    "Deadlock-freedom",
                ],
                answer: "Deadlock-freedom",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the following two schedules:\nS1: r1(x)r1(y)r2(x)r2(y)w2(y)w1(x)\nS2: r1(x)r2(x)r2(y)w2(y)r1(y)w1(x)\nWhich one of the following options is correct?",
                options: [
                    "S1 is conflict serializable, and S2 is not conflict serializable",
                    "S1 is not conflict serializable, and S2 is conflict serializable",
                    "Both S1 and S2 are conflict serializable",
                    "Neither S1 nor S2 is conflict serializable",
                ],
                answer: "S1 is not conflict serializable, and S2 is conflict serializable",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A 2-phase locking protocol where a transaction T acquires exclusive locks to objects O1...Ok in increasing order of their addresses will:",
                options: [
                    "guarantee serializability and deadlock-freedom",
                    "guarantee neither serializability nor deadlock freedom",
                    "guarantee serializability but not deadlock freedom",
                    "guarantee deadlock-freedom but not serializability",
                ],
                answer: "guarantee serializability and deadlock-freedom",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The following relation records the age of 500 employees: empAge(empNo, age). What does the relational algebra expression Π_empNo.(empAge ⋈_(age>age1) ρ_empNo1,age1(empAge)) generate?",
                options: [
                    "Employee numbers of only those employees whose age is the maximum",
                    "Employee numbers of only those employees whose age is more than the age of exactly one other employee",
                    "Employee numbers of all employees whose age is not the minimum",
                    "Employee numbers of all employees whose age is the minimum",
                ],
                answer: "Employee numbers of all employees whose age is not the minimum",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "What is the interpretation of the SQL query `select deptId, count(*) from emp where gender = 'female' and salary > (select avg(salary) from emp) group by deptId;`?",
                options: [
                    "Number of female employees whose salary is greater than avg salary of employees in their department",
                    "Number of female employees whose salary is greater than avg salary of all employees",
                    "Number of female employees in the department",
                    "Number of female employees in the company",
                ],
                answer: "Number of female employees whose salary is greater than avg salary of all employees",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Consider relations Student and Performance. What is the number of rows returned by the SQL query `SELECT S.Student_Name, sum(P.Marks) FROM Student S, Performance P WHERE S.Roll_No=P.Roll_No GROUP BY S.Student_Name`?",
                answer: "2",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A clustering index is defined on the fields which are of type:",
                options: [
                    "non-key and ordering",
                    "non-key and non-ordering",
                    "key and ordering",
                    "key and non-ordering",
                ],
                answer: "non-key and ordering",
            },
            {
                id: 11,
                type: "mcq",
                question: "B+ Trees are considered BALANCED because:",
                options: [
                    "the length of the paths from the root to all leaf nodes are all equal.",
                    "the lengths of the paths from the root to all leaf nodes differ from each other by at most 1",
                    "the number of children of any two nonleaf sibling nodes differ by at most 1.",
                    "the number of records in any two leaf nodes differ by at most 1",
                ],
                answer: "the length of the paths from the root to all leaf nodes are all equal.",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider an ER model of a database with entity types A and B connected by a relationship R. Under which condition can the relational table for R be merged with that of A?",
                options: [
                    "Relationship R is one-to-many and the participation of A in R is total.",
                    "Relationship R is one-to-many and the participation of A in R is partial.",
                    "Relationship R is many-to-one and the participation of A in R is total.",
                    "Relationship R is many-to-one and the participation of A in R is partial.",
                ],
                answer: "Relationship R is many-to-one and the participation of A in R is total.",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Consider an ER model where E1 and E2 are connected by m:n relationship R12, and E1 and E3 by 1:n relationship R13. Given attributes for each, what is the minimum number of relations that would be generated if all relations are in 3NF?",
                answer: "4",
            },
            {
                id: 14,
                type: "msq",
                question:
                    "Suppose the functional dependencies P->QR and RS->T hold on a relation U(P,Q,R,S,T). Which of the following functional dependencies can be inferred?",
                options: ["PS->T", "R->T", "P->R", "PS->Q"],
                answer: ["PS->T", "P->R", "PS->Q"],
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the relational schema: Suppliers(sid, sname, city, street), Parts(pid, pname, color), Catalog(sid, pid, cost). Assume (sname, city) is a candidate key in Suppliers. Which is TRUE about this schema?",
                options: [
                    "The schema is in BCNF",
                    "The schema is in 3NF but not in BCNF",
                    "The schema is in 2NF but not in 3NF",
                    "The schema is not in 2NF",
                ],
                answer: "The schema is in BCNF",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following is an INCORRECT option for candidate keys in a student registration table?",
                options: [
                    "BankAccount_Num is a candidate key.",
                    "Registration_Num can be a primary key.",
                    "UID is a candidate key if all students are from the same country.",
                    "If S is a super key such that S ∩ UID is NULL then S ∪ UID is also a super key.",
                ],
                answer: "BankAccount_Num is a candidate key.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which of the following is the trivial functional dependency in F+ for F = {{P,R}->{S,T}; {P,S,U}->{Q,R};} on relation X(P,Q,R,S,T,U)?",
                options: [
                    "{P,R}->{S,T}",
                    "{P,R}->{R,T}",
                    "{P,S}->{S}",
                    "{P,S,U}->{Q}",
                ],
                answer: "{P,S}->{S}",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which relational schemas is in 3NF but not in BCNF?\nI: Registration(rollno, courses) where courses is set-valued.\nII: Registration(rollno, courseid, email) with rollno,courseid->email and email->rollno.\nIII: Registration(rollno, courseid, marks, grade) with rollno,courseid->marks,grade and marks->grade.",
                options: ["Schema I", "Schema II", "Schema III", "Schema IV"],
                answer: "Schema II",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider a simple checkpointing protocol and a log of operations. If a crash happens, what are the contents of the undo and redo lists?",
                options: [
                    "Undo: T3, T1; Redo: T2",
                    "Undo: T3, T1; Redo: T2, T4",
                    "Undo: none; Redo: T2, T4, T3, T1",
                    "Undo: T3, T1, T4; Redo: T2",
                ],
                answer: "Undo: T3, T1; Redo: T2",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the schedule: T1: RA, RC, WD, WB, Commit; T2: RB, WB, RD, WC, Commit. Which of the following schedules is conflict equivalent to the above schedule?",
                options: [
                    "(a) T1: RA RC WD WB, T2: RB WB RD WC",
                    "(b) T1: RA RC WD WB, T2: RBWBRD WC",
                    "(c) T1: RA RC WD, T2: RBWBRD WB WC",
                    "(d) T1: RA RC WD WB, T2: RBWBRDWC",
                ],
                answer: "(a) T1: RA RC WD WB, T2: RB WB RD WC",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following concurrency control protocols ensure both conflict serializability and freedom from deadlock?",
                options: [
                    "2-phase locking",
                    "Time-stamp ordering",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "Time-stamp ordering",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "Consider relations P(X,Y,Z), Q(X,Y,T) and R(Y,V). How many tuples will be returned by the query: Π_X(σ_(P.Y=R.Y ∧ R.V=V2)(P×R)) - Π_X(σ_(Q.Y=R.Y ∧ Q.T>2)(Q×R))?",
                answer: "1",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider a join between relations r(R) and s(S) using the nested loop method with 3 buffers. Assuming size(r(R)) < size(s(S)), the join will have fewer disk block accesses if:",
                options: [
                    "relation r(R) is in the outer loop.",
                    "relation s(S) is in the outer loop.",
                    "join selection factor is more than 0.5.",
                    "join selection factor is less than 0.5.",
                ],
                answer: "relation r(R) is in the outer loop.",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "A SQL query is run on the 'top_scorer' table: `SELECT ta.player FROM top_scorer ta WHERE ta.goals > ALL (SELECT tb.goals FROM top_scorer tb WHERE tb.country='Spain') AND ta.goals > ANY (SELECT tc.goals FROM top_scorer tc WHERE tc.country='Germany')`. How many tuples are returned?",
                answer: "7",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A database is implemented using a B+ tree. An index file on hard disk has block size 4096 bytes and record pointer size 7 bytes. The candidate key ANum is 12 bytes. What is the number of blocks in the index file for 150,000 student records?",
                answer: "698",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "In a B+ tree, the search key is 12 bytes long, block size is 1024 bytes, record pointer is 10 bytes, and block pointer is 8 bytes. What is the maximum number of keys in each non-leaf node?",
                answer: "50",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider statements S1 and S2 about the relational data model:\nS1: A relation scheme can have at most one foreign key.\nS2: A foreign key in a relation scheme R cannot be used to refer to tuples of R.\nWhich choice is correct?",
                options: [
                    "Both S1 and S2 are true",
                    "S1 is true and S2 is false",
                    "S1 is false and S2 is true",
                    "Both S1 and S2 are false",
                ],
                answer: "Both S1 and S2 are false",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Given two statements:\nS1: A foreign key declaration can always be replaced by an equivalent check assertion in SQL.\nS2: The definition `CREATE TABLE S (a INTEGER, d INTEGER, e INTEGER, PRIMARY KEY(d), FOREIGN KEY(a) references(R))` is valid if R(a,b,c) has primary key (a,b).\nWhich is CORRECT?",
                options: [
                    "S1 is TRUE and S2 is FALSE",
                    "Both S1 and S2 are TRUE",
                    "S1 is FALSE and S2 is TRUE",
                    "Both S1 and S2 are FALSE",
                ],
                answer: "Both S1 and S2 are FALSE",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "The following functional dependencies hold true for schema R{V,W,X,Y,Z}: V->W; VW->X; Y->VX; Y->Z. Which is an irreducible equivalent for this set?",
                options: [
                    "V->W, V->X, Y->V, Y->Z",
                    "V->W, W->X, Y->V, Y->Z",
                    "V->W, V->X, Y->V, Y->X, Y->Z",
                    "V->W, W->X, Y->V, Y->X, Y->Z",
                ],
                answer: "V->W, V->X, Y->V, Y->Z",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the relational schema: Book(Title, Author, Catalog_no, ...), Collection(Title, Author, Catalog_no) with key {Author, Title}. Given FDs, which statement is true?",
                options: [
                    "Both Book and Collection are in BCNF",
                    "Both Book and Collection are in 3NF only",
                    "Book is in 2NF and Collection is in 3NF",
                    "Both Book and Collection are in 2NF only",
                ],
                answer: "Book is in 2NF and Collection is in 3NF",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    "In table T1, P is the primary key and Q is a foreign key referencing R in table T2 with on-delete/on-update cascade. In T2, R is primary key and S is a foreign key referencing P in T1 with on-delete set NULL/on-update cascade. To delete record <3,8> from T1, how many additional records must be deleted from T1?",
                answer: "0",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider a relation R(P,Q,S,T,X,Y,Z,W) with FDs PQ->X, P->YX, Q->Y, Y->ZW. Which decomposition scheme is lossless but the other is lossy?",
                options: [
                    "D1 is lossless, D2 is lossy",
                    "D1 is lossy, D2 is lossless",
                    "Both are lossless",
                    "Both are lossy",
                ],
                answer: "D1 is lossless, D2 is lossy",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Given two statements:\nS1: Every table with two single-valued attributes is in 1NF, 2NF, 3NF and BCNF.\nS2: AB->C, D->E, E->C is a minimal cover for the set of FDs {AB->C, D->E, AB->E, E->C}.\nWhich one is CORRECT?",
                options: [
                    "S1 is TRUE and S2 is FALSE.",
                    "Both S1 and S2 are TRUE.",
                    "S1 is FALSE and S2 TRUE.",
                    "Both S1 and S2 are FALSE.",
                ],
                answer: "S1 is TRUE and S2 is FALSE.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A transaction involves two bank accounts x and y. The constraint that the sum of x and y should remain constant is that of:",
                options: [
                    "Atomicity",
                    "Consistency",
                    "Isolation",
                    "Durability",
                ],
                answer: "Consistency",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the schedule S of transactions T1, T2, T3, T4. Which statement is CORRECT?\nT1: ... Writes(x) Commit\nT2: Reads(X), Writes(X) Commit\nT3: ... Writes(Y) Reads(Z) Commit\nT4: ... Reads(X) Reads(Y) Commit",
                options: [
                    "S is conflict-serializable but not recoverable",
                    "S is not conflict-serializable but is recoverable",
                    "S is both conflict-serializable and recoverable",
                    "S is neither conflict-serializable nor is it recoverable",
                ],
                answer: "S is both conflict-serializable and recoverable",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which concurrency control protocols ensure both conflict serializability and freedom from deadlock? I. 2-phase locking II. Time-stamp ordering",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "II only",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider relations r(A,B) and s(B,C), where s.B is a primary key and r.B is a foreign key. Which of the following queries is NOT equivalent to Q: r ⋈ (σ_{B<5}(S))?",
                options: [
                    "σ_{B<5}(r⋈s)",
                    "σ_{B<5}(r LOJ s)",
                    "r LOJ (σ_{B<5}(s))",
                    "σ_{B<5}(r) LOJ s",
                ],
                answer: "σ_{B<5}(r) LOJ s",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Suppose R1(A,B) and R2(C,D) are two relations where B is a foreign key referencing C. Which of the following is ALWAYS TRUE?",
                options: [
                    "Π_B(r1) - Π_C(r2) = ϕ",
                    "Π_C(r2) - Π_B(r1) = ϕ",
                    "Π_B(r1) = Π_C(r2)",
                    "Π_B(r1) - Π_C(r2) != ϕ",
                ],
                answer: "Π_B(r1) - Π_C(r2) = ϕ",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the SQL query: `SELECT s.sno, s.name FROM Suppliers s, Catalogue c WHERE s.no = c.sno AND cost > (SELECT AVG(cost) FROM Catalogue WHERE pno = 'P4' GROUP BY pno);`. How many rows are returned?",
                options: ["4", "5", "2", "0"],
                answer: "2",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following transport layer protocols is used to support electronic mail?",
                options: ["SMTP", "IP", "TCP", "UDP"],
                answer: "TCP",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the minimum number of keys in any non-root node of a B+ tree in which the maximum number of keys in a node is 5?",
                options: ["1", "2", "3", "4"],
                answer: "2",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the following ER diagram. What is the minimum number of tables needed to represent M, N, P, R1, R2?",
                options: ["2", "3", "4", "5"],
                answer: "3",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Let the set of FDs F={QR->S, R->P, S->Q} hold on schema X=(PQRS). X is decomposed into Y=(PR) and Z=(QRS). Which statement is correct?\nI. Both Y and Z are in BCNF\nII. Decomposition is dependency preserving and lossless",
                options: [
                    "Both I and II",
                    "I only",
                    "II only",
                    "Neither I nor II",
                ],
                answer: "II only",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Let R(A,B,C,D,E,P,G) have FDs: AB->CD, DE->P, C->E, P->C, B->G. The relational schema R is:",
                options: [
                    "in BCNF",
                    "in 3NF, but not in BCNF",
                    "in 2NF, but not in 3NF",
                    "not in 2NF",
                ],
                answer: "not in 2NF",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "The transaction `read(x); x:=x-50; write(x); read(y); y:=y+50; write(y);` maintains the constraint that the sum of x and y should remain constant. This is a property of:",
                options: [
                    "Atomicity",
                    "Consistency",
                    "Isolation",
                    "Durability",
                ],
                answer: "Consistency",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the ER diagram with M, N, P, R1, and R2. Which of the following is a correct attribute set for one of the tables for the minimum number of tables needed to represent the diagram?",
                options: [
                    "{M1, M2, M3, P1}",
                    "{M1, P1, N1, N2}",
                    "{M1, P1, N1}",
                    "{M1, P1}",
                ],
                answer: "{M1, M2, M3, P1}",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Let R(A,B,C,D) have FDs: A->B, B->C, C->D, D->B. The decomposition of R into (A,B),(B,C),(B,D):",
                options: [
                    "Gives a lossless join, and is dependency preserving",
                    "Gives a lossless join, but is not dependency preserving",
                    "Does not give a lossless join, but is dependency preserving",
                    "Does not give a lossless join and is not dependency preserving",
                ],
                answer: "Gives a lossless join, and is dependency preserving",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "A database of research articles uses the schema (VOLUME, NUMBER, STARTPAGE, ENDPAGE, TITLE, YEAR, PRICE). Which is the weakest normal form that the new database (with a decomposed schema) satisfies, but the old one does not?",
                options: ["1 NF", "2 NF", "3 NF", "BCNF"],
                answer: "2 NF",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Any non-serial interleaving of transactions T1: `read(P); read(Q); if(P==0)Q++; write(Q);` and T2: `read(Q); read(P); if(Q==0)P++; write(P);` leads to:",
                options: [
                    "a serializable schedule",
                    "a schedule that is not conflict serializable",
                    "a conflict serializable schedule",
                    "a schedule for which a precedence graph cannot be drawn",
                ],
                answer: "a schedule that is not conflict serializable",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Two transactions T1 and T2 are given. The total number of conflict serializable schedules that can be formed by T1 and T2 is _______.",
                answer: "54",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "In an 8KB direct-mapped write-back cache with 32-byte blocks and 32-bit addresses, what is the total size of memory (in bits) needed at the cache controller to store metadata?",
                options: ["4864 bits", "6144 bits", "6656 bits", "5376 bits"],
                answer: "5376 bits",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "On a miss in L1 and hit in L2, a block is transferred from L2 to L1. With L1 block size 4 words, L2 access time 20ns, L1 access time 2ns, what is the time for this transfer?",
                options: ["2 ns", "20 ns", "22 ns", "88 ns"],
                answer: "22 ns",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "What is the optimized version of the relational algebra expression π_A1(π_A2(σ_F1(σ_F2(r)))), where A1 ⊂ A2?",
                options: [
                    "π_A1(σ_{F1∧F2}(r))",
                    "π_A1(σ_{F1∨F2}(r))",
                    "π_A2(σ_{F1∧F2}(r))",
                    "π_A2(σ_{F1∨F2}(r))",
                ],
                answer: "π_A1(σ_{F1∧F2}(r))",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider two relations R1(A,B) and R2(A,C). What is the content of the full natural outer join of R1 and R2?",
                options: [
                    "R contains e,f,g but not a,b",
                    "R contains all of a,b,c,d,e,f,g",
                    "R contains a,b,e,f,g but not c,d",
                    "R contains e but not f,g",
                ],
                answer: "R contains a,b,e,f,g but not c,d",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A database table T contains two integer columns X and Y. After inserting (1,1), it is updated 128 times with new records being (MX+1, 2*MY+1). What is the output of `SELECT Y FROM T WHERE X=7;`?",
                options: ["127", "255", "129", "257"],
                answer: "127",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which of the following is NOT true of deadlock prevention and deadlock avoidance schemes?",
                options: [
                    "In prevention, request is always granted if resulting state is safe",
                    "In avoidance, request is always granted if resulting state is safe",
                    "Avoidance is less restrictive than prevention",
                    "Avoidance requires a priori knowledge of resource needs",
                ],
                answer: "In prevention, request is always granted if resulting state is safe",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "For the following four schedules due to three transactions, which one is conflict serializable?",
                options: [
                    "r1(x);r2(x);w1(x);r3(x);w2(x)",
                    "r2(x);r1(x);w2(x);r3(x);w1(x)",
                    "r3(x);r2(x);r1(x);w2(x);w1(x)",
                    "r2(x);w2(x);r3(x);r1(x);w1(x)",
                ],
                answer: "r2(x);w2(x);r3(x);r1(x);w1(x)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which one of the following protocols is NOT used to resolve one form of address to another one?",
                options: ["DNS", "ARP", "DHCP", "RARP"],
                answer: "DHCP",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "For inclusion to hold between L1 and L2 caches, which is necessary?",
                options: [
                    "L1 must be write-through",
                    "L2 must be write-through",
                    "L2 associativity > L1 associativity",
                    "L2 cache must be at least as large as L1",
                ],
                answer: "L2 cache must be at least as large as L1",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the maximum size of data that the application layer can pass on to the TCP layer below?",
                options: [
                    "Any Size",
                    "2^16 bytes- size of TCP header",
                    "2^16 bytes",
                    "1500 bytes",
                ],
                answer: "Any Size",
            },
        ],
        7: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which is the correct serialization of the schedule: T1: R(X),W(X); T2: R(Y),W(Y); T3: R(Y),W(X)?",
                options: [
                    "T1->T3->T2",
                    "T2->T1->T3",
                    "T2->T3->T1",
                    "T3->T1->T2",
                ],
                answer: "T1->T3->T2",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A database schedule with two transactions T1 and T2 is S = r2(X); r1(X); r2(Y); w1(X); r1(Y); w2(X); a1; a2. Which statement about S is TRUE?",
                options: [
                    "S is non-recoverable",
                    "S is recoverable, but has a cascading abort",
                    "S does not have a cascading abort",
                    "S is strict",
                ],
                answer: "S does not have a cascading abort",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider a partial schedule S involving two transactions. If T1 fails immediately after time instance 9, which statement is correct?",
                options: [
                    "T2 must be aborted and then both T1 and T2 must be restarted",
                    "Schedule S is non-recoverable",
                    "Only T2 must be aborted and then restarted",
                    "Schedule S is recoverable and can ensure atomicity",
                ],
                answer: "Schedule S is non-recoverable",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "On a non-pipelined sequential processor, a program segment transfers 500 bytes from an I/O device. What is the approximate speedup achieved by using a DMA controller instead?",
                options: ["3.4", "4.4", "5.1", "6.7"],
                answer: "3.4",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the following relational schema for a library database. What is the highest normal form of the 'Book' schema?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                answer: "2NF",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider a database that has the relation schema CR(StudentName, CourseName). What does the query T2 <- CR ÷ T1 compute?",
                options: [
                    "Students who took all courses",
                    "Courses taken by all students",
                    "Students who took exactly the courses in T1",
                    "Courses taken by at least one student",
                ],
                answer: "Students who took exactly the courses in T1",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "What is the logical translation of the statement 'None of my friends are perfect'?",
                options: [
                    "∃x(F(x) ∧ ¬P(x))",
                    "∃x(¬F(x) ∧ P(x))",
                    "∃x(¬F(x) ∧ ¬P(x))",
                    "¬∃x(F(x) ∧ P(x))",
                ],
                answer: "¬∃x(F(x) ∧ P(x))",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following predicate formulae is NOT logically valid?",
                options: [
                    "∃x(p(x) ∧ W) ≡ ∃x p(x) ∧ W",
                    "∃x(p(x) → W) ≡ ∀x p(x) → W",
                    "∀x(p(x) → W) ≡ ∀x p(x) → W",
                    "∀x(p(x) ∨ W) ≡ ∀x p(x) ∨ W",
                ],
                answer: "∀x(p(x) → W) ≡ ∀x p(x) → W",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the first-order logic sentence F: ∀x(∃yR(x, y)). Which of the sentences below are implied by F?",
                options: [
                    "I and IV only",
                    "II and III only",
                    "IV only",
                    "I, II, and IV only",
                ],
                answer: "I and IV only",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following well-formed formulae in predicate calculus is NOT valid?",
                options: [
                    "(∀x p(x) → ∀x q(x)) → (∃x ¬p(x) ∨ ∀x q(x))",
                    "(∃x p(x) ∨ ∃x q(x)) → ∃x(p(x) ∨ q(x))",
                    "∃x(p(x) ∧ q(x)) → (∃x p(x) ∧ ∃x q(x))",
                    "∀x(p(x) ∨ q(x)) → (∀x p(x) ∨ ∀x q(x))",
                ],
                answer: "∀x(p(x) ∨ q(x)) → (∀x p(x) ∨ ∀x q(x))",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which of the following is NOT logically equivalent to ¬∃x(∀y(α) ∧ ∀z(β))?",
                options: [
                    "∀x(∃z(¬β) → ∀y(α))",
                    "∀x(∀z(β) → ∃y(¬α))",
                    "∀x(∀y(α) → ∃z(¬β))",
                    "∀x(∃y(¬α) ∨ ∃z(¬β))",
                ],
                answer: "∀x(∃z(¬β) → ∀y(α))",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A client process P needs to make a TCP connection to a server S. S executes socket(), bind(), listen() and is preempted. P executes socket(), then connect(). What happens?",
                options: [
                    "connect() returns successfully",
                    "connect() blocks",
                    "connect() returns an error",
                    "connect() results in a core dump",
                ],
                answer: "connect() blocks",
            },
            {
                id: 13,
                type: "mcq",
                question: "Which system call results in sending SYN packets?",
                options: ["socket", "bind", "listen", "connect"],
                answer: "connect",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider statements about TCP connection state machine. S1: Loss of SYN+ACK from server will not establish connection. S4: Server moves LISTEN -> SYN_RCVD -> ESTABLISHED on no packet loss. Which are TRUE?",
                options: [
                    "S2 and S3 only",
                    "S1 and S4 only",
                    "S1 and S3 only",
                    "S2 and S4 only",
                ],
                answer: "S1 and S4 only",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the worst case time complexity of inserting n elements into an empty linked list, if the list needs to be maintained in sorted order?",
                options: ["Θ(n)", "Θ(n log n)", "Θ(n^2)", "Θ(1)"],
                answer: "Θ(n^2)",
            },
        ],
        8: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A C function takes a singly-linked list and moves the last element to the front. Which code snippet correctly replaces the blank line?",
                options: [
                    "q = NULL; p->next = head; head = p;",
                    "q->next = NULL; head = p; p->next = head;",
                    "head = p; p->next = q; q->next = NULL;",
                    "q->next = NULL; p->next = head; head = p;",
                ],
                answer: "q->next = NULL; p->next = head; head = p;",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A C function `rearrange` takes a singly-linked list and rearranges its elements. Given an input list 1,2,3,4,5,6,7, what is the content of the list after the function completes execution?",
                options: [
                    "1,2,3,4,5,6,7",
                    "2,1,4,3,6,5,7",
                    "1,3,2,5,4,7,6",
                    "2,3,4,5,6,7,1",
                ],
                answer: "2,1,4,3,6,5,7",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which of the following are NOT true in a pipelined processor?\n1. Bypassing can handle all RAW hazards.\n2. Register renaming can eliminate all register-carried WAR hazards.\n3. Control hazard penalties can be eliminated by dynamic branch prediction.",
                options: [
                    "1 and 2 only",
                    "1 and 3 only",
                    "2 and 3 only",
                    "1, 2 and 3",
                ],
                answer: "1 and 3 only",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The protocol Data Unit (PDU) for the application layer in the Internet stack is:",
                options: ["Segment", "Datagram", "Message", "Frame"],
                answer: "Message",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which one of the following is not a client-server application?",
                options: ["Internet chat", "Web browsing", "E-mail", "Ping"],
                answer: "Ping",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following protocol pairs can be used to send and retrieve e-mails (in that order)?",
                options: [
                    "IMAP, SMTP",
                    "SMTP, MIME",
                    "IMAP, POP3",
                    "SMTP, POP3",
                ],
                answer: "SMTP, POP3",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which of the following is/are example(s) of stateful application layer protocols?",
                options: ["HTTP", "FTP", "TCP", "POP3"],
                answer: "FTP and POP3",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "What is the maximum size of data that the application layer can pass on to the TCP layer below?",
                options: [
                    "Any Size",
                    "2^16 bytes - size of TCP header",
                    "2^16 bytes",
                    "1500 bytes",
                ],
                answer: "Any Size",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Match the following activities related to email with their protocols: ml: Send email, m2: Download email, m3: Checking email in web browser.",
                options: [
                    "m1:HTTP, m2:SMTP, m3:POP",
                    "m1:SMTP, m2:FTP, m3:HTTP",
                    "m1:SMTP, m2:POP, m3:HTTP",
                    "m1:POP, m2:SMTP, m3:IMAP",
                ],
                answer: "m1:SMTP, m2:POP, m3:HTTP",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which of the following protocols is NOT used to resolve one form of address to another?",
                options: ["DNS", "ARP", "DHCP", "RARP"],
                answer: "DHCP",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider the resolution of www.gate.org.in by a DNS resolver using iterative queries with no caching. The number of DNS query-response pairs involved is:",
                answer: "4",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Identify the correct sequence of packets transmitted by a host when a browser requests a webpage from a remote server, assuming the host has just been restarted.",
                options: [
                    "HTTP GET, DNS query, TCP SYN",
                    "DNS query, HTTP GET, TCP SYN",
                    "DNS query, TCP SYN, HTTP GET",
                    "TCP SYN, DNS query, HTTP GET",
                ],
                answer: "DNS query, TCP SYN, HTTP GET",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "In a file allocation system, which allocation scheme can be used if no external fragmentation is allowed?",
                options: [
                    "Contiguous and Indexed",
                    "Linked only",
                    "Indexed only",
                    "Linked and Indexed",
                ],
                answer: "Linked and Indexed",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "The data blocks of a very large file in the Unix file system are allocated using:",
                options: [
                    "Contiguous allocation",
                    "Linked allocation",
                    "Indexed allocation",
                    "An extension of indexed allocation",
                ],
                answer: "An extension of indexed allocation",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "A queue is implemented using an array such that ENQUEUE and DEQUEUE operations are performed efficiently. Which statement is CORRECT (n is number of items)?",
                options: [
                    "Both operations can be in O(1) time.",
                    "At most one is O(1), the other is Ω(n).",
                    "Worst case for both is Ω(n).",
                    "Worst case for both is Ω(log n).",
                ],
                answer: "Both operations can be in O(1) time.",
            },
        ],
    },
    6: {
        //cn
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "In the following pairs of OSI protocol layer/sub-layer and its functionality, the INCORRECT pair is:",
                options: [
                    "Network layer and Routing",
                    "Data Link Layer and Bit synchronization",
                    "Transport layer and End-to-end process communication",
                    "Medium Access Control sub-layer and Channel sharing",
                ],
                answer: "Data Link Layer and Bit synchronization",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "In the IPv4 addressing format, the number of networks allowed under Class C addresses is:",
                options: ["2^14", "2^7", "2^21", "2^24"],
                answer: "2^21",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "A packet addressed to 200.150.68.118 arrives at a router with a given forwarding table. It will be forwarded to the interface with ID _____.",
                answer: "3",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider three machines M, N, and P with IP addresses 100.10.5.2, 100.10.5.5, and 100.10.5.6, and subnet mask 255.255.255.252. Which one of the following is true?",
                options: [
                    "M, N, and P all belong to the same subnet",
                    "Only M and N belong to the same subnet",
                    "Only N and P belong to the same subnet",
                    "Only M and P belong to the same subnet",
                ],
                answer: "Only N and P belong to the same subnet",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "For each IP address in Group-I, identify the correct choice of the next hop from Group-II using the provided routing table. Group-I: A. 128.96.171.92, B. 128.96.167.151, C. 128.96.163.151, D. 128.96.165.121",
                options: [
                    "a-1, b-3, c-5, d-4",
                    "a-1, b-4, c-2, d-5",
                    "a-2, b-3, c-4, d-5",
                    "a-2, b-3, c-5, d-4",
                ],
                answer: "a-2, b-3, c-5, d-4",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Computers A and B have IP addresses 10.105.1.113 and 10.105.1.91 respectively and use the same netmask N. Which value of N should not be used if A and B should belong to the same network?",
                options: [
                    "255.255.255.0",
                    "255.255.255.128",
                    "255.255.255.192",
                    "255.255.255.224",
                ],
                answer: "255.255.255.224",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Host X (192.168.1.197) is connected via routers R1 and R2 to host Y (192.168.1.80). Given the router IP addresses, how many distinct subnets are guaranteed to exist?",
                options: ["1", "2", "3", "6"],
                answer: "3",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which IP address should Host X configure as its gateway?",
                options: [
                    "192.168.1.67",
                    "192.168.1.110",
                    "192.168.1.135",
                    "192.168.1.155",
                ],
                answer: "192.168.1.110",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "If a class B network on the Internet has a subnet mask of 255.255.248.0, what is the maximum number of hosts per subnet?",
                options: ["1022", "1023", "2046", "2047"],
                answer: "2046",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "An organization needs 1500 IP addresses. The ISP provides a block from 202.61.0.0/17. Which of the following address spaces is a potential candidate for allocation to minimize routing entries?",
                options: [
                    "I. 202.61.84.0/21",
                    "II. 202.61.104.0/21",
                    "III. 202.61.64.0/21",
                    "IV. 202.61.144.0/21",
                ],
                answer: "II and III only",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "In the network 200.10.11.144/27, what is the decimal value of the fourth octet of the last IP address assignable to a host?",
                answer: "158",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "An IP router implementing CIDR receives a packet with address 131.23.151.76. Given its routing table, which output interface identifier will the packet be forwarded to?",
                answer: "1",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "An ISP has the CIDR block 245.248.128.0/20. It gives half to Organization A and a quarter to Organization B. Which of the following is a valid allocation?",
                options: [
                    "A: 245.248.136.0/21, B: 245.248.128.0/22",
                    "A: 245.248.128.0/21, B: 245.248.128.0/22",
                    "A: 245.248.132.0/22, B: 245.248.132.0/21",
                    "A: 245.248.136.0/24, B: 245.248.132.0/21",
                ],
                answer: "A: 245.248.136.0/21, B: 245.248.128.0/22",
            },
            {
                id: 14,
                type: "msq",
                question:
                    "Which of the following prefixes in CIDR notation can collectively aggregate all subnets in the given routing table?",
                options: [
                    "12.20.164.0/20",
                    "12.20.164.0/22",
                    "12.20.164.0/21",
                    "12.20.168.0/22",
                ],
                answer: ["12.20.164.0/22", "12.20.168.0/22"],
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Suppose two hosts are connected by a point-to-point link using Stop-and-Wait protocol. In which scenario is the link utilization the lowest?",
                options: [
                    "Longer link length and lower transmission rate",
                    "Longer link length and higher transmission rate",
                    "Shorter link length and lower transmission rate",
                    "Shorter link length and higher transmission rate",
                ],
                answer: "Longer link length and higher transmission rate",
            },
        ],
        2: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider a 100Mbps link between an earth station and a satellite at an altitude of 2100Km. Signal propagates at 3x10^8 m/s. What is the time (in ms, rounded to two decimal places) for the receiver to completely receive a 1000-byte packet?",
                answer: "7.08",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider a sliding window protocol over a full-duplex link with 100ms one-way propagation delay. Data frames are 2000 bits, ACK frames are 10 bits, link rate is 1Mbps. What is the minimum sender window size to achieve 50% link utilization?",
                answer: "51",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "For a Stop-and-Wait ARQ protocol with given parameters (1Mbps bit rate, 0.75ms propagation delay, 1980-byte info frame), what is the transmission efficiency in percentage?",
                answer: "89.33",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Two hosts X and Y are connected by a 10^6 bits/sec link over 10,000 km (propagation speed 2x10^8 m/sec). X sends a 50,000-byte file. Let transmission and propagation delays be p and q milliseconds. What are p and q?",
                options: [
                    "p=50, q=100",
                    "p=50, q=400",
                    "p=100, q=50",
                    "p=400, q=50",
                ],
                answer: "p=400, q=50",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A sender uses Stop-and-Wait ARQ. Frames are 1000 bytes, sender rate is 80 Kbps. ACKs are 100 bytes, receiver rate is 8 Kbps. One-way propagation delay is 100ms. What is the sender throughput in bytes/second?",
                answer: "2500",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "A 128x10^3 bits/sec satellite link has a 150ms one-way propagation delay. Selective retransmission is used with 1KB frames. What is the minimum number of bits for the sequence number field to achieve 100% utilization?",
                answer: "4",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A network connects two systems 8000 km apart with a bandwidth of 500x10^6 bps. Propagation speed is 4x10^6 m/s. A Go-Back-N protocol is used with 10^7 bit packets. What is the minimum size in bits of the sequence number field for full capacity usage?",
                answer: "8",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "A link has a transmission speed of 10^6 bits/sec and uses 1000-byte data packets. The efficiency of the stop-and-wait protocol is exactly 25%. What is the one-way propagation delay in milliseconds?",
                answer: "12",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Suppose the stop-and-wait protocol is used on a link with a bit rate of 64 kbps and 20ms propagation delay. What is the minimum frame size in bytes to achieve at least 50% link utilization?",
                answer: "320",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A selective repeat sliding window protocol uses 1KB frames on a 1.5 Mbps link with 50ms one-way latency. To achieve 60% link utilization, what is the minimum number of bits for the sequence number field?",
                answer: "5",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Frames of 1000 bits are sent over a 10^6 bps duplex link with 25ms propagation time. What is the minimum number of bits (I) required to represent sequence numbers distinctly to maximally pack frames in transit?",
                options: ["I=2", "I=3", "I=4", "I=5"],
                answer: "I=5",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Using a sliding window protocol with a sender window of 2^I, after sending 2^I frames, what is the minimum time the sender must wait before sending the next frame, if ACKs are piggybacked?",
                options: ["16 ms", "18 ms", "20 ms", "22 ms"],
                answer: "20 ms",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A satellite link uses go-back-127 sliding window protocol. What should be the packet size for a channel utilization of 25%? (Altitude 36,504 km, signal speed 3x10^8 m/s)",
                options: ["120 bytes", "60 bytes", "240 bytes", "90 bytes"],
                answer: "120 bytes",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A 12-bit Hamming codeword has 8-bit data and 4 check bits. Given the data and check bit tables, what are the correct values of x and y?",
                options: ["x=0, y=0", "x=0, y=1", "x=1, y=0", "x=1, y=1"],
                answer: "x=1, y=0",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider a CRC scheme with generator polynomial X^3+X+1. If the message m4m3m2m1m0 = 11000 is to be transmitted, what is the check bit sequence c2c1c0?",
                options: ["101", "110", "100", "111"],
                answer: "100",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "A binary code consists of four valid codewords: 00000, 01011, 10101, 11110. Let the minimum Hamming distance be p and the maximum number of erroneous bits that can be corrected be q. What are p and q?",
                options: ["p=3, q=1", "p=3, q=2", "p=4, q=1", "p=4, q=2"],
                answer: "p=3, q=1",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A network uses polynomials over GF(2) for error checking with 8 information bits and generator x^3+x+1. The message 01011011 is transmitted as:",
                options: [
                    "01011011010",
                    "01011011011",
                    "01011011101",
                    "01011011100",
                ],
                answer: "01011011101",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "What condition should G(x) satisfy to detect an odd number of bits in error in CRC checking?",
                options: [
                    "G(x) contains more than two terms",
                    "G(x) does not divide 1+x^k for any k <= frame length",
                    "1+x is a factor of G(x)",
                    "G(x) has an odd number of terms",
                ],
                answer: "1+x is a factor of G(x)",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Data is transmitted using 2D even parity. Given a received 4x7 data matrix with parity bits, what is the minimum possible number of corrupted bits?",
                options: ["1", "2", "3", "4"],
                answer: "3",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "How many bytes of data can be sent in 15 seconds over a 9600 baud serial link in asynchronous mode with odd parity and two stop bits?",
                options: [
                    "10,000 bytes",
                    "12,000 bytes",
                    "15,000 bytes",
                    "27,000 bytes",
                ],
                answer: "12,000 bytes",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A bit-stuffing protocol uses the delimiter 01111110. If the output string after stuffing is 01111100101, what was the input string?",
                options: [
                    "0111110100",
                    "0111110101",
                    "0111111101",
                    "0111111111",
                ],
                answer: "0111110101",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider two hosts P and Q connected through router R. MTU P-R is 1500 bytes, R-Q is 820 bytes. A 1400-byte TCP segment is sent from P to Q. IP header is 20 bytes. Which statement is correct?",
                options: [
                    "Two fragments are created at R, and the second fragment size is 620 bytes.",
                    "If the second fragment is lost, R will resend it with the same IP ID.",
                    "If the second fragment is lost, P must resend the whole TCP segment.",
                    "TCP destination port can be determined from the second fragment only.",
                ],
                answer: [
                    "Two fragments are created at R, and the second fragment size is 620 bytes.",
                    "If the second fragment is lost, P must resend the whole TCP segment.",
                ],
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following statements about an IP based router is/are TRUE?\nI. A router does not modify IP packets during forwarding.\nII. It is not necessary for a router to implement any routing protocol.\nIII. A router should reassemble IP fragments if the outgoing MTU is larger.",
                options: [
                    "I only",
                    "I and II only",
                    "II and III only",
                    "II only",
                ],
                answer: "II only",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "An IP packet of 4500 bytes (20-byte IPv4 header, 40-byte TCP header) is sent to a router with an MTU of 600 bytes. What is the fragmentation offset value in the third fragment?",
                answer: "144",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "What is the maximum number of IPv4 router addresses that can be listed in the record route (RR) option field of an IPv4 header?",
                answer: "9",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "An IP datagram of 1000 bytes arrives at a router. It must be forwarded on a link with an MTU of 100 bytes. IP header is 20 bytes. How many fragments will be created?",
                answer: "13",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Which field of an IP header is NOT modified by a typical IP router?",
                options: [
                    "Checksum",
                    "Source address",
                    "Time to Live (TTL)",
                    "Length",
                ],
                answer: "Source address",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Every host in an IPv4 network has a 1-second resolution clock and needs to generate up to 1000 unique IDs per second. Using a 50-bit globally unique ID, after how many seconds will the identifiers wrap around?",
                answer: "262.14",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Host A sends a UDP datagram with 8880 bytes of user data to host B over Ethernet (MTU=1500 bytes). UDP header is 8 bytes, IP header is 20 bytes. How many IP fragments will be transmitted and what is the offset of the last fragment?",
                options: [
                    "6 and 925",
                    "6 and 7400",
                    "7 and 1110",
                    "7 and 8880",
                ],
                answer: "7 and 1110",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "In an IPv4 datagram, M bit is 0, HLEN is 10, total length is 400, and fragment offset is 300. What is the position of the datagram and the sequence numbers of its payload?",
                options: [
                    "Last fragment, 2400 and 2789",
                    "First fragment, 2400 and 2759",
                    "Last fragment, 2400 and 2759",
                    "Middle fragment, 300 and 689",
                ],
                answer: "Last fragment, 2400 and 2759",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "What is the best explanation for the need for the Time-to-Live (TTL) field in an IP datagram?",
                options: [
                    "It can be used to prioritize packets",
                    "It can be used to reduce delays",
                    "It can be used to optimize throughput",
                    "It can be used to prevent packet looping",
                ],
                answer: "It can be used to prevent packet looping",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider two statements about ARP:\nS1: Destination MAC address of an ARP reply is a broadcast address.\nS2: Destination MAC address of an ARP request is a broadcast address.\nWhich one of the following choices is correct?",
                options: [
                    "Both S1 and S2 are true",
                    "S1 is true and S2 is false",
                    "S1 is false and S2 is true",
                    "Both S1 and S2 are false",
                ],
                answer: "S1 is false and S2 is true",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Suppose machine X wishes to find the MAC address of machine Y in its subnet. Which technique can be used?",
                options: [
                    "X sends ARP request to gateway's MAC",
                    "X sends ARP request with broadcast MAC",
                    "X sends ARP request with broadcast IP",
                    "X sends ARP request to gateway's IP",
                ],
                answer: "X sends ARP request with broadcast MAC",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Source S and destination D are connected through two intermediate routers. How many times does each packet visit the network layer and data link layer during transmission from S to D?",
                options: [
                    "Network: 4, Data link: 4",
                    "Network: 4, Data link: 3",
                    "Network: 4, Data link: 6",
                    "Network: 2, Data link: 6",
                ],
                answer: "Network: 4, Data link: 6",
            },
            {
                id: 5,
                type: "msq",
                question:
                    "Which of the following statements is/are INCORRECT about the OSPF routing protocol?",
                options: [
                    "OSPF implements Bellman-Ford algorithm",
                    "OSPF uses Dijkstra's algorithm",
                    "OSPF is used as an inter-domain routing protocol",
                    "OSPF implements hierarchical routing",
                ],
                answer: [
                    "OSPF implements Bellman-Ford algorithm",
                    "OSPF is used as an inter-domain routing protocol",
                ],
            },
            {
                id: 6,
                type: "nat",
                question:
                    "Three routers P, Q, R exchange distance vectors. The link Q-R fails. P and Q send updates at the same average rate. What is the probability of a routing loop formation between P and Q?",
                answer: "0.5",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Router R has neighbors X,Y,Z with distances 3,2,5. It receives routing vectors from them indicating distances to P and Q. Which statement is correct regarding R's new routing table?",
                options: [
                    "Distance from R to Q will be 7",
                    "Distance from R to P will be 10",
                    "Next hop for a packet from R to Q is Z",
                    "Next hop for a packet from R to P is Y",
                ],
                answer: [
                    "Distance from R to P will be 10",
                    "Next hop for a packet from R to P is Y",
                ],
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which statements about RIP and OSPF are CORRECT?\nI: RIP uses distance vector routing.\nII: RIP packets are sent using UDP.\nIII: OSPF packets are sent using TCP.\nIV: OSPF is based on link-state routing.",
                options: [
                    "I and IV only",
                    "I, II and III only",
                    "I, II and IV only",
                    "II, III and IV only",
                ],
                answer: "I, II and IV only",
            },
            {
                id: 9,
                type: "mcq",
                question: "Which is TRUE about RIP and OSPF?",
                options: [
                    "RIP uses distance vector and OSPF uses link state routing.",
                    "OSPF uses distance vector and RIP uses link state routing.",
                    "Both use link state routing.",
                    "Both use distance vector routing.",
                ],
                answer: "RIP uses distance vector and OSPF uses link state routing.",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider statements about link-state and distance vector protocols for a large network.\nS1: Computational overhead is higher in link-state.\nS2: Distance vector (with split horizon) avoids persistent routing loops.\nS3: Link-state converges faster after a topology change.\nWhich is correct?",
                options: [
                    "S1, S2, S3 are all true",
                    "S1, S2, S3 are all false",
                    "S1 and S2 are true, but S3 is false",
                    "S1 and S3 are true, but S2 is false",
                ],
                answer: "S1 and S3 are true, but S2 is false",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A network with 5 nodes uses Distance Vector Routing. The link N2-N3 cost reduces to 2. After the next update round, what will be the new distance vector at node N3?",
                options: [
                    "(3, 2, 0, 2, 5)",
                    "(3, 2, 0, 2, 6)",
                    "(7, 2, 0, 2, 5)",
                    "(7, 2, 0, 2, 6)",
                ],
                answer: "(3, 2, 0, 2, 5)",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "After the update in the previous question, the link N1-N2 goes down. After the NEXT ROUND of update, what will be the cost to N1 in the distance vector of N3?",
                options: ["3", "9", "10", "infinity"],
                answer: "9",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A network has 6 routers. After all routing tables stabilize using distance vector routing, how many links will never be used for carrying any data?",
                options: ["4", "3", "2", "1"],
                answer: "2",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "The weights of all unused links in the previous question are changed to 2. How many links will now remain unused?",
                options: ["0", "1", "2", "3"],
                answer: "1",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which statements about Distance Vector (DV) and Link State (LS) routing are true?\n(S1) Count to infinity is a problem only with DV.\n(S3) In DV, the shortest path algorithm is run only at one node.",
                options: [
                    "S1, S2 and S4 only",
                    "S1, S3 and S4 only",
                    "S2 and S3 only",
                    "S1 and S4 only",
                ],
                answer: "S1, S3 and S4 only",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    "Two hosts are connected via a packet switch with 10^7 bps links, each with 20µs propagation delay. The switch forwards a packet 35µs after receiving it. What is the time in microseconds to transmit 10000 bits of data using 5000-bit packets?",
                answer: "1575",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "A source S transmits a 10^6 bit file to destination D over a network of two routers and three 100km links (speed 10^8 m/s, bandwidth 1Mbps). The file is broken into 1000 packets of 1000 bits. What is the total sum of transmission and propagation delays?",
                options: ["1005 ms", "1010 ms", "3000 ms", "3003 ms"],
                answer: "1005 ms",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Host A sends a 10^3 byte file to host B through two routers. Link bandwidth is 10^6 bytes/sec. Let T1, T2, T3 be the times taken to transmit the file as one packet, 10 packets, and 20 packets respectively (100-byte header each). Which is CORRECT?",
                options: [
                    "T1 < T2 < T3",
                    "T1 > T2 > T3",
                    "T2 = T3, T3 < T1",
                    "T1 = T3, T3 > T2",
                ],
                answer: "T1 > T2 > T3",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider an enterprise network with two Ethernet segments, a web server, and a firewall, connected via three routers. What is the number of subnets inside the enterprise network?",
                options: ["3", "12", "6", "8"],
                answer: "6",
            },
            {
                id: 5,
                type: "msq",
                question:
                    "You are designing a new reliable byte-stream transport protocol, myTCP, over a 100 Mbps network with 150ms RTT and 2-minute MSL. Which of the following are valid lengths for the Sequence Number field?",
                options: ["30 bits", "32 bits", "34 bits", "36 bits"],
                answer: ["32 bits", "34 bits", "36 bits"],
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the following statements about TCP:\nI. TCP connections are full duplex.\nII. TCP has no option for selective acknowledgement.\nIII. TCP connections are message streams.",
                options: [
                    "Only I is correct",
                    "Only I and III are correct",
                    "Only II and III are correct",
                    "All of I, II and III are correct",
                ],
                answer: "Only I is correct",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The transport layer protocols used for real time multimedia, file transfer, DNS and email respectively are:",
                options: [
                    "TCP, UDP, UDP and TCP",
                    "UDP, TCP, TCP and UDP",
                    "UDP, TCP, UDP and TCP",
                    "TCP, UDP, TCP and UDP",
                ],
                answer: "UDP, TCP, UDP and TCP",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider socket API on a Linux machine that supports connected UDP sockets. Which statements are CORRECT?\nI. A connected UDP socket can be used to communicate with multiple peers simultaneously.\nII. A process can successfully call connect function again for an already connected UDP socket.",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "II only",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Match the following fields with their lengths in bits:\nP. UDP Header’s Port Number, Q. Ethernet MAC Address, R. IPv6 Next Header, S. TCP Header’s Sequence Number",
                options: [
                    "P-III, Q-IV, R-II, S-I",
                    "P-II, Q-I, R-IV, S-III",
                    "P-IV, Q-I, R-II, S-III",
                    "P-IV, Q-I, R-III, S-II",
                ],
                answer: "P-IV, Q-I, R-II, S-III",
            },
            {
                id: 10,
                type: "msq",
                question:
                    "A TCP server application on host S, listening on port P, crashes and reboots. Which of the following behaviors is/are possible?",
                options: [
                    "If the client was waiting to receive a packet, it may wait indefinitely",
                    "The TCP server application on S can listen on P after reboot",
                    "If the client sends a packet after the server reboot, it will receive a RST segment",
                    "If the client sends a packet after the server reboot, it will receive a FIN segment",
                ],
                answer: [
                    "If the client was waiting to receive a packet, it may wait indefinitely",
                    "The TCP server application on S can listen on P after reboot",
                    "If the client sends a packet after the server reboot, it will receive a RST segment",
                ],
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "A TCP client calls close, sending a FIN to the server. The server responds with an ACK. In which state does the client-side TCP connection wait for the FIN from the server-side TCP?",
                options: ["LAST-ACK", "TIME-WAIT", "FIN-WAIT-1", "FIN-WAIT-2"],
                answer: "FIN-WAIT-2",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Identify the correct order in which a server process must invoke the function calls accept, bind, listen, and recv according to UNIX socket API.",
                options: [
                    "listen, accept, bind, recv",
                    "bind, listen, accept, recv",
                    "bind, accept, listen, recv",
                    "accept, listen, bind, recv",
                ],
                answer: "bind, listen, accept, recv",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which socket API function converts an unconnected active TCP socket into a passive socket?",
                options: ["connect", "bind", "listen", "accept"],
                answer: "listen",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A client process P needs to connect to a server S. S executes socket(), bind(), listen() and is preempted. P then executes socket() and connect(). What happens?",
                options: [
                    "connect() returns successfully",
                    "connect() blocks",
                    "connect() returns an error",
                    "connect() results in a core dump",
                ],
                answer: "connect() blocks",
            },
            {
                id: 15,
                type: "mcq",
                question: "Which system call results in sending SYN packets?",
                options: ["socket", "bind", "listen", "connect"],
                answer: "connect",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following statements about TCP connection state machine are TRUE?\nS1: Loss of SYN+ACK from server will not establish connection\nS4: Server moves LISTEN -> SYN_RCVD -> ESTABLISHED on no packet loss",
                options: [
                    "S2 and S3 only",
                    "S1 and S4 only",
                    "S1 and S3 only",
                    "S2 and S4 only",
                ],
                answer: "S1 and S4 only",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider data transfer using TCP over a 1 Gbps link. MSL is 60 seconds. What is the minimum number of bits required for the sequence number field to prevent wrap-around?",
                answer: "33",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider a three-way handshake. P sends a TCP connection request to Q with SEQ=X. Q accepts. What is in the TCP segment header sent from Q to P?",
                options: [
                    "SYN=1, SEQ=Y, ACK=1, ACK_num=X+1, FIN=0",
                    "SYN=1, SEQ=Y, ACK=1, ACK_num=X, FIN=0",
                    "SYN=0, SEQ=X+1, ACK=0, ACK_num=Y, FIN=1",
                    "SYN=1, SEQ=X+1, ACK=0, ACK_num=Y, FIN=0",
                ],
                answer: "SYN=1, SEQ=Y, ACK=1, ACK_num=X+1, FIN=0",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "A TCP connection has RTT=6ms, receiver window=50KB, slow-start threshold=32KB, MSS=2KB. The connection is established at t=0. What is the size of the congestion window (in KB) at t+60ms?",
                answer: "44",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A long-lived TCP session has 1 Gbps bandwidth and starts with sequence number 1234. What is the minimum time (in seconds) before this sequence number can be used again?",
                answer: "34",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following statements regarding the slow start phase of TCP is correct? (cwnd=congestion window, MSS=Max Segment Size)",
                options: [
                    "cwnd increases by 2 MSS on every successful ACK",
                    "cwnd approximately doubles on every successful ACK",
                    "cwnd increases by 1 MSS every RTT",
                    "cwnd approximately doubles every RTT",
                ],
                answer: "cwnd approximately doubles every RTT",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "A host uses a token bucket algorithm with 1MB capacity, 20MBps max output, and 10MBps token arrival rate. The bucket is full. How long does it take to send 12MB of data?",
                answer: "1.1",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following statements about TCP connections is/are FALSE?\n1. If a segment's sequence number is m, the next is always m+1.\n3. The advertised window size never changes.",
                options: [
                    "3 only",
                    "1 and 3 only",
                    "1 and 4 only",
                    "2 and 4 only",
                ],
                answer: "1 and 3 only",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "An IP packet originates from sender S and traverses to R through ISPs. The initial TTL is 32. What is the maximum possible TTL value when R receives the datagram?",
                answer: "26",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "A TCP connection's congestion window is 32KB when a timeout occurs. RTT is 100ms, MSS is 2KB. How long (in msec) does it take to get back to a 32KB congestion window?",
                answer: "1100",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "In TCP's AIMD algorithm, the window size at the start of slow start is 2 MSS and the threshold is 8 MSS. A timeout occurs during the fifth transmission. What is the congestion window size at the end of the tenth transmission?",
                options: ["8 MSS", "14 MSS", "7 MSS", "12 MSS"],
                answer: "7 MSS",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A computer on a 10 Mbps network is regulated by a token bucket filled at 2 Mbps. It's initially filled to 16 Megabits. What's the maximum duration it can transmit at the full 10 Mbps?",
                options: ["1.6 seconds", "2 seconds", "5 seconds", "8 seconds"],
                answer: "2 seconds",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which of the following statements are TRUE?\nS1: TCP handles both congestion and flow control.\nS3: Fast retransmit deals with congestion but not flow control.\nS4: Slow start mechanism deals with both congestion and flow control.",
                options: [
                    "S1, S2 and S3 only",
                    "S1 and S3 only",
                    "S3 and S4 only",
                    "S1, S3, and S4 only",
                ],
                answer: "S1, S3, and S4 only",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "In the slow-start phase of the TCP congestion algorithm, the size of the congestion window:",
                options: [
                    "does not increase",
                    "increases linearly",
                    "increases quadratically",
                    "increases exponentially",
                ],
                answer: "increases exponentially",
            },
            {
                id: 15,
                type: "msq",
                question:
                    "You click on www.gate-2023.in. The browser cache is empty. A DNS lookup is triggered. Which statements are CORRECT about the minimum elapsed time until the browser fully renders the page (with 10 objects)?",
                options: [
                    "7 RTTs, in case of non-persistent HTTP with 5 parallel TCP connections.",
                    "5 RTTs, in case of persistent HTTP with pipelining.",
                    "9 RTTs, in case of non-persistent HTTP with 5 parallel TCP connections.",
                    "6 RTTs, in case of persistent HTTP with pipelining.",
                ],
                answer: [
                    "9 RTTs, in case of non-persistent HTTP with 5 parallel TCP connections.",
                    "6 RTTs, in case of persistent HTTP with pipelining.",
                ],
            },
        ],
        7: [
            {
                id: 1,
                type: "nat",
                question:
                    "You request a web page with text and five small images via a browser in non-persistent HTTP mode. The browser cache is empty. What is the minimum number of TCP connections required?",
                answer: "6",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "In one of the pairs of protocols given below, both can use multiple TCP connections between the same client and server. Which one is that?",
                options: [
                    "HTTP, FTP",
                    "HTTP, TELNET",
                    "FTP, SMTP",
                    "HTTP, SMTP",
                ],
                answer: "HTTP, FTP",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which of the following transport layer protocols is used to support electronic mail?",
                options: ["SMTP", "IP", "TCP", "UDP"],
                answer: "TCP",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which of the following is/are example(s) of stateful application layer protocols? (i) HTTP (ii) FTP (iii) TCP (iv) POP3",
                options: [
                    "(i) and (ii) only",
                    "(ii) and (iii) only",
                    "(ii) and (iv) only",
                    "(d) (iv) only",
                ],
                answer: "(ii) and (iv) only",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A network uses pure ALOHA. Each frame is 1000 bits. Channel rate is 1 Mbps. Transmissions are a Poisson process at 1000 frames/sec. What is the throughput of the network (rounded to the nearest integer)?",
                answer: "135",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "Two nodes P and Q are d meters apart. P starts transmitting at t=0 after carrier-sensing. Q also starts carrier-sensing at t=0. Signal speed is 10 m/unit time. Transmissions last 20 units. What is the maximum distance d (in meters) that allows Q to avoid a collision?",
                answer: "50",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "15 machines need to be connected in a LAN using 8-port Ethernet switches without separate uplink ports. What is the minimum number of switches needed?",
                answer: "3",
            },
            {
                id: 8,
                type: "mcq",
                question: "Which statement about Ethernet LAN is TRUE?",
                options: [
                    "A station stops sensing the channel once it starts transmitting.",
                    "The purpose of the jamming signal is to pad small frames.",
                    "A station continues to transmit the packet even after collision.",
                    "The exponential backoff mechanism reduces retransmission collision probability.",
                ],
                answer: "The exponential backoff mechanism reduces retransmission collision probability.",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "A CSMA/CD network has 20x10^6 bps bandwidth. Max signal propagation time is 40 microseconds. What is the minimum frame size in bytes?",
                answer: "200",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A CSMA/CD network transmits data at 100 Mbps over a 1 km cable. If the minimum frame size is 1250 bytes, what is the signal speed (km/sec) in the cable?",
                options: ["8000", "10000", "16000", "20000"],
                answer: "20000",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "A LAN has four nodes S1-S4. Probabilities of generating a frame in a time slot are 0.1, 0.2, 0.3, 0.4. What is the probability of sending a frame in the first slot without any collision?",
                answer: "0.4404",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Determine the maximum length of the cable (in km) for transmitting data at 500 Mbps in an Ethernet LAN with 10,000-bit frames. Signal speed is 200,000 km/s.",
                options: ["1", "2", "2.5", "5"],
                answer: "2",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the minimum frame size for a CSMA/CD network running at 1 Gbps on a 200m cable with a link speed of 2x10^8 m/s?",
                options: [
                    "125 bytes",
                    "250 bytes",
                    "500 bytes",
                    "None of these",
                ],
                answer: "250 bytes",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which of the following is NOT true for the language {a^p | p is a prime number}?",
                options: [
                    "It is not accepted by a Turing Machine",
                    "It is regular but not context-free",
                    "It is context-free but not regular",
                    "It is neither regular nor context-free, but accepted by a Turing machine",
                ],
                answer: "It is neither regular nor context-free, but accepted by a Turing machine",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following pairs have DIFFERENT expressive power?",
                options: [
                    "Deterministic and Non-deterministic finite automata",
                    "Deterministic and Non-deterministic push down automata",
                    "Deterministic and Non-deterministic single-tape Turing machine",
                    "Single-tape and multi-tape Turing machine",
                ],
                answer: "Deterministic and Non-deterministic push down automata",
            },
        ],
    },
    //toc
    7: {
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the language: L = {w ∈ {0,1}* | w ends with the substring 011}. Which one of the following deterministic finite automata accepts L?",
                options: [
                    "(a) A 4-state DFA with final state after 011.",
                    "(b) A 4-state DFA with incorrect transitions for 0.",
                    "(c) A 4-state DFA that accepts strings ending in 110.",
                    "(d) A 4-state DFA that correctly recognizes the 011 suffix.",
                ],
                answer: "(d) A 4-state DFA that correctly recognizes the 011 suffix.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Let L ⊆ {0, 1}* be an arbitrary regular language accepted by a minimal DFA with k states. Which one of the following languages must necessarily be accepted by a minimal DFA with k states?",
                options: ["L – {01}", "L ∪ {01}", "{0, 1}* – L", "L . L"],
                answer: "{0, 1}* – L",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the following deterministic finite automaton (DFA). The number of strings of length 8 accepted by the above automaton is _____.",
                answer: "256",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the DFA A given. Which of the following are FALSE?\n1. Complement of L(A) is context-free.\n2. L(A) = L((11*0 + 0)(0 + 1)*0*1*)\n3. For the language accepted by A, A is the minimal DFA\n4. A accepts all strings over {0, 1} of length at least 2.",
                options: [
                    "1 and 3 only",
                    "2 and 4 only",
                    "2 and 3 only",
                    "3 and 4 only",
                ],
                answer: "3 and 4 only",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the set of strings on {0,1} in which every substring of 3 symbols has at most two zeros. A partially completed DFA that accepts this language is shown. The missing arcs in the DFA are:",
                options: [
                    "Transitions from 00 to 1, 01 to 1, 10 to 0, 11 to 0",
                    "Transitions from 00 to 0, 01 to 1, 10 to 0, 11 to 0",
                    "Transitions from 00 to 1, 01 to 1, 10 to 0, 11 to 0, q to 0",
                    "Transitions from 00 to 1, 01 to 1, 10 to 0, 11 to 0, q to 1",
                ],
                answer: "Transitions from 00 to 1, 01 to 1, 10 to 0, 11 to 0, q to 1",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A deterministic finite automaton (DFA) D with alphabet Σ = {a, b} is given. Which of the following finite state machines is a valid minimal DFA which accepts the same language as D?",
                options: [
                    "A 4-state DFA with states p,q,r,s",
                    "A 3-state DFA with states p,q,r",
                    "A 3-state DFA with states p,q,s",
                    "A 2-state DFA with states p,q",
                ],
                answer: "A 4-state DFA with states p,q,r,s",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The DFA shown accepts the set of all strings over {0,1} that:",
                options: [
                    "Begin either with 0 or 1.",
                    "End with 0.",
                    "End with 00.",
                    "Contain the substring 00.",
                ],
                answer: "End with 00.",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Let δ denote the transition function and δ_hat denote the extended transition function of the ε-NFA whose transition table is given. The value of δ_hat(q2, aba) is:",
                options: ["Φ", "{q0, q1, q3}", "{q0, q1, q2}", "{q0, q2, q3}"],
                answer: "{q0, q1, q2}",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the finite automaton in the figure. What is the set of reachable states for the input string 0011?",
                options: [
                    "{q0, q1, q2}",
                    "{q0, q1}",
                    "{q0, q1, q2, q3}",
                    "{q3}",
                ],
                answer: "{q0, q1, q2}",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What is the complement of the language accepted by the NFA shown below? Assume Σ = {a} and ε is the empty string.",
                options: ["ϕ", "{ε}", "a*", "{a, ε}"],
                answer: "{ε}",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "If the final states and non-final states in the DFA below are interchanged, which of the following languages over {a, b} will be accepted?",
                options: [
                    "Set of all strings that do not end with ab",
                    "Set of all strings that begin with either an a or ab",
                    "Set of all strings that do not contain the substring ab.",
                    "The set described by the regular expression b*aa*(ba)*b*",
                ],
                answer: "Set of all strings that do not end with ab",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "Consider the language L = {w ∈ {0, 1}* | w does not contain three or more consecutive 1’s}. The minimum number of states in a Deterministic Finite-state Automaton (DFA) for L is _____.",
                answer: "4",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Consider the language L = {x ∈ {a, b}* | number of a's in x is divisible by 2 but not divisible by 3}. The minimum number of states in a DFA that accepts L is ______.",
                answer: "6",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Let Σ be the set of all bijections from {1, ..., 5} to {1, ..., 5}. Consider the language L = {x ∈ Σ* | π(x) = id}. The minimum number of states in any DFA accepting L is ______.",
                answer: "120",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Let N be an NFA with n states. Let k be the number of states of a minimal DFA which is equivalent to N. Which one of the following is necessarily true?",
                options: ["k ≥ 2^n", "k ≥ n", "k ≤ n^2", "k ≤ 2^n"],
                answer: "k ≤ 2^n",
            },
        ],
        2: [
            {
                id: 1,
                type: "nat",
                question:
                    "The minimum possible number of states of a deterministic finite automaton that accepts the regular language L = {w1 a w2| w1, w2 ∈{a, b}*, |w1|=2,|w2| ≥ 3} is___________.",
                answer: "8",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Consider the DFAs M and N given. The number of states in a minimal DFA that accepts the language L(M) ∩ L(N) is _______.",
                answer: "1",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Definition of a language L with alphabet {a} is given as L = {a^(nk) | k > 0, and n is a positive integer constant}. What is the minimum number of states needed in a DFA to recognize L?",
                options: ["k + 1", "n + 1", "2^(n+1)", "2^(k+1)"],
                answer: "n + 1",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Let w be any string of length n in {0,1}*. Let L be the set of all substrings of w. What is the minimum number of states in a non-deterministic finite automaton that accepts L?",
                options: ["n - 1", "n", "n + 1", "2^(n-1)"],
                answer: "n + 1",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Let N be an NFA with n states and let M be the minimized DFA with m states recognizing the same language. Which of the following is NECESSARILY true?",
                options: [
                    "m ≤ 2^n",
                    "n ≤ m",
                    "M has one accept state",
                    "m = 2^n",
                ],
                answer: "m ≤ 2^n",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "A synchronous circuit processes a string of 0s and 1s, replacing the first 1 in any consecutive sequence of 1s with a 0. This can be designed as a two-state Mealy machine. What are the Boolean expressions for the next state `t` and output `y` in terms of current state `s` and input `b`?",
                options: [
                    "t=s+b, y=sb",
                    "t=b, y=sb",
                    "t=b, y=s'b",
                    "t=s+b, y=s'b",
                ],
                answer: "t=b, y=sb",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Given the state table of an FSM with two states A and B, one input, and one output. If the initial state is A=0, B=0, what is the minimum length of an input string to reach state A=0, B=1 with output=1?",
                options: ["3", "4", "5", "6"],
                answer: "3",
            },
            {
                id: 8,
                type: "msq",
                question:
                    "Which of the following regular expressions represent(s) the set of all binary numbers that are divisible by three? Assume that the string ε is divisible by three.",
                options: [
                    "(0 + 1(01*0)*1)*",
                    "(0 + 11 + 10(1 + 00)*01)*",
                    "(0*(1(01*0)*1)*)*",
                    "(0 + 11 + 11(1 + 00)*00)*",
                ],
                answer: ["(0 + 1(01*0)*1)*", "(0*(1(01*0)*1)*)*"],
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Which one of the following regular expressions represents the set of all binary strings with an odd number of 1's?",
                options: [
                    "(0*10*10*)*0*1",
                    "10*(0*10*10*)*",
                    "((0+1)*1(0+1)*1)*10*",
                    "(0*10*10*)*10*",
                ],
                answer: "((0+1)*1(0+1)*1)*10*",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which one of the following regular expressions represents the language: the set of all binary strings having two consecutive 0’s and two consecutive 1’s?",
                options: [
                    "(0+1)*0011(0+1)* + (0+1)*1100(0+1)*",
                    "(0+1)*(00(0+1)*11 + 11(0+1)*00)(0+1)*",
                    "(0+1)*00(0+1)* + (0+1)*11(0+1)*",
                    "00(0+1)*11 + 11(0+1)*00",
                ],
                answer: "(0+1)*(00(0+1)*11 + 11(0+1)*00)(0+1)*",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider the languages L1 = ϕ and L2 = {a}. Which one of the following represents L1L2* ∪ L1* ?",
                options: ["{ε}", "ϕ", "a*", "{ε, a}"],
                answer: "{ε}",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Given the language L = {ab, aa, baa}, which of the following strings are in L*?\n1. abaabaaabaa\n2. aaaabaaaa\n3. baaaaabaaaab\n4. baaaaabaa",
                options: [
                    "1, 2 and 3",
                    "2, 3 and 4",
                    "1, 2 and 4",
                    "1, 3 and 4",
                ],
                answer: "1, 3 and 4",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Let L = {w ∈ (0+1)* | w has even number of 1s}. Which one of the regular expressions below represents L?",
                options: [
                    "(0*10*1)*",
                    "0*(10*10*)*",
                    "0*(10*1)*0*",
                    "0*1(10*1)*10*",
                ],
                answer: "0*(10*10*)*",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which language over {0,1} is described by the regular expression: (0+1)*0(0+1)*0(0+1)* ?",
                options: [
                    "The set of all strings containing the substring 00",
                    "The set of all strings containing at most two 0's",
                    "The set of all strings containing at least two 0's",
                    "The set of all strings that begin and end with either 0 or 1",
                ],
                answer: "The set of all strings containing at least two 0's",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which regular expression describes the language over {0, 1} consisting of strings that contain exactly two 1’s?",
                options: [
                    "(0+1)*11(0+1)*",
                    "0*110*",
                    "0*10*10*",
                    "(0+1)*1(0+1)*1(0+1)*",
                ],
                answer: "0*10*10*",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the DFA A shown. Which regular expression correctly describes the language accepted by A?",
                options: ["1(0*11)*", "0(0+1)*", "1(0+11)*", "1(110*)*"],
                answer: "1(0+11)*",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which one of the following regular expressions correctly represents the language of the finite automaton given below?",
                options: [
                    "ab*bab* + ba*aba*",
                    "(ab*b)*ab* + (ba*a)*ba*",
                    "(ab*b + ba*a)*(a*+b*)",
                    "(ba*a + ab*b)*(ab* + ba*)",
                ],
                answer: "(ba*a + ab*b)*(ab* + ba*)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the language L given by the regular expression (a+b)*b(a+b) over {a,b}. The smallest number of states needed in a DFA accepting L is _______.",
                answer: "4",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "The number of states in the minimum sized DFA that accepts the language defined by the regular expression (0+1)*(0+1)(0+1)* is ______.",
                answer: "2",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Let L be the language represented by Σ*0011Σ* where Σ={0,1}. What is the minimum number of states in a DFA that recognizes the complement of L?",
                options: ["4", "5", "6", "8"],
                answer: "5",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "The number of states in the minimal deterministic finite automaton corresponding to the regular expression (0+1)*(10) is ______.",
                answer: "3",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "What is the length of the shortest string NOT in the language of the regular expression a*b*(ba)*a*?",
                answer: "3",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the regular expressions given below represent the following DFA? I. 0*1(1+00*1)*, II. 0*1*1+11*0*1, III. (0+1)*1",
                options: [
                    "I and II only",
                    "I and III only",
                    "II and III only",
                    "I, II and III",
                ],
                answer: "I and III only",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the context-free grammar G: S → aSb | X, X → aX | Xb | a | b. Which statement is CORRECT?",
                options: [
                    "The language generated by G is (a+b)*",
                    "The language generated by G is a*(a+b)b*",
                    "The language generated by G is a*b*(a+b)",
                    "The language generated by G is not a regular language.",
                ],
                answer: "The language generated by G is a*(a+b)b*",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "For Σ={a, b}, let L = {x | x = a^(2+3k) or x = b^(10+12k), k>=0}. Which can be a pumping length for L?",
                options: ["3", "5", "9", "24"],
                answer: "24",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Given a language L over alphabet {0} accepted by an automaton. The order of L is the smallest k such that L^k = L^(k+1). What is the order of L1?",
                answer: "2",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Language L1 is defined by S1→aS1b|ε. Language L2 is defined by S2→abS2|ε. Consider statements P: L1 is regular, Q: L2 is regular. Which is TRUE?",
                options: [
                    "Both P and Q are true.",
                    "P is true and Q is false.",
                    "P is false and Q is true.",
                    "Both P and Q are false.",
                ],
                answer: "P is false and Q is true.",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which language is generated by the grammar S → aS | bS | ε?",
                options: [
                    "{a^n b^m | n,m>=0}",
                    "{w in {a,b}* | w has equal a's and b's}",
                    "{a^n | n>=0} U {b^n | n>=0} U {a^n b^n | n>=0}",
                    "{a,b}*",
                ],
                answer: "{a,b}*",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider a regular grammar where X0=1X1, X1=0X1+1X2, X2=0X1+{λ}. Which choice represents the strings in X0?",
                options: [
                    "10(0*+(10)*)1",
                    "10(0*+(10)*)*1",
                    "1(0+10)*1",
                    "10(0+10)*1+110(0+10)*1",
                ],
                answer: "1(0+10)*1",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "If L is a regular language over Σ={a,b}, which of the following languages is NOT regular?",
                options: ["L.LR", "{w w^R | w in L}", "Prefix(L)", "Suffix(L)"],
                answer: "{w w^R | w in L}",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following languages is/are regular?\nL1: {w x w^R | w,x in {a,b}* and |w|,|x|>0}\nL2: {a^n b^m | m!=n and m,n>=0}\nL3: {a^p b^q c^r | p,q,r>=0}",
                options: [
                    "L1 and L3 only",
                    "L2 only",
                    "L2 and L3 only",
                    "L3 only",
                ],
                answer: "L1 and L3 only",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Let L1 = {w in {0,1}* | w has at least as many (110)s as (011)s}. Let L2 = {w in {0,1}* | w has at least as many (000)s as (111)s}. Which is TRUE?",
                options: [
                    "L1 is regular but not L2",
                    "L2 is regular but not L1",
                    "Both L1 and L2 are regular",
                    "Neither L1 nor L2 are regular",
                ],
                answer: "L1 is regular but not L2",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "If L1 = {a^n | n>=0} and L2 = {b^n | n>=0}, consider:\nI. L1.L2 is a regular language\nII. L1.L2 = {a^n b^n | n>=0}\nWhich is CORRECT?",
                options: [
                    "Only I",
                    "Only II",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "Only I",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which of the following are regular sets?\nI. {a^n b^2m | n>=0, m>=0}\nIV. {xcy | x,y in {a,b}*}",
                options: [
                    "I and IV only",
                    "I and III only",
                    "IV only",
                    "I, II, and III only",
                ],
                answer: "I and IV only",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the following statements:\nI. If L1 U L2 is regular, then both L1 and L2 must be regular.\nII. The class of regular languages is closed under infinite union.\nWhich statements are TRUE?",
                options: [
                    "Both I and II",
                    "II only",
                    "I only",
                    "Neither I nor II",
                ],
                answer: "Neither I nor II",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Consider the following two statements:\nI. If all states of an NFA are accepting states then the language accepted by the NFA is Σ*.\nII. There exists a regular language A such that for all languages B, A ∩ B is regular.\nWhich one of the following is CORRECT?",
                options: [
                    "Only I is true",
                    "Only II is true",
                    "Both I and II are true",
                    "Both I and II are false",
                ],
                answer: "Only II is true",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the pushdown automaton P below. Which option correctly describes the language accepted by P?",
                options: [
                    "{a^m b^n | 1<=m and n<m}",
                    "{a^m b^n | 0<=n<=m}",
                    "{a^m b^n | 0<=m and 0<=n}",
                    "{a^m | 0<=m} U {b^n | 0<=n}",
                ],
                answer: "{a^m b^n | 0<=n<=m}",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "Consider a pushdown automaton over input alphabet {a,b}. How many strings of length 100 does it accept?",
                answer: "50",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider the transition diagram of a PDA. Let L denote the language accepted by it. Which one of the following is TRUE?",
                options: [
                    "L = {a^n b^n | n>=0} and is not accepted by any finite automata",
                    "L = {a^n} U {a^n b^n} and is not accepted by any deterministic PDA",
                    "L is not accepted by any Turing machine that halts on every input",
                    "L = {a^n} U {a^n b^n} and is deterministic context-free",
                ],
                answer: "L = {a^n} U {a^n b^n} and is deterministic context-free",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider the NPDA that accepts by empty stack. Which of the following sequences must follow the string 101100 so that the overall string is accepted?",
                options: ["10110", "10010", "01010", "01001"],
                answer: "10010",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "If G is a grammar with productions S -> SaS | aSb | bSa | SS | ε, which of the following strings is not generated by G?",
                options: ["abab", "aaab", "abbaa", "babba"],
                answer: "babba",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Identify the language generated by the grammar S->XY, X->aX|a, Y->aYb|ε.",
                options: [
                    "{a^m b^n | m>n, n>0}",
                    "{a^m b^n | m>n, n>=0}",
                    "{a^m b^n | m>=n, n>=0}",
                    "{a^m b^n | m>=n, n>0}",
                ],
                answer: "{a^m b^n | m>n, n>=0}",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Consider the grammar S->abScT|abcT, T->bT|b. Which of the following represents the language generated?",
                options: [
                    "{(ab)^n(cb)^n | n>=1}",
                    "{(ab)^n cb^m1 ... cb^mn | n,m_i>=1}",
                    "{(ab)^n(cb^m)^n | m,n>=1}",
                    "{(ab)^n(cb^n)^m | m,n>=1}",
                ],
                answer: "{(ab)^n cb^m1 ... cb^mn | n,m_i>=1}",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider the grammars G1: S->aSb|T, T->cT|ε and G2: S->bSa|T, T->cT|ε. The language L(G1) ∩ L(G2) is:",
                options: [
                    "Finite.",
                    "Not finite but regular.",
                    "Context-free but not regular.",
                    "Recursive but not context-free.",
                ],
                answer: "Not finite but regular.",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which one of the following grammars is free from left recursion?",
                options: [
                    "S->AB, A->Aa|b, B->c",
                    "S->Ab|Bb|c, A->Bd|ε, B->e",
                    "S->Aa|B, A->Bb|Sc|ε, B->d",
                    "S->Aa|Bb|c, A->Bd|ε, B->Ae|ε",
                ],
                answer: "S->Ab|Bb|c, A->Bd|ε, B->e",
            },
        ],
        5: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the grammars G1: S->aS|B, B->b|bB and G2: S->aA|bB, A->aA|B|ε, B->bB|ε. Which pair of languages is generated by G1 and G2 respectively?",
                options: [
                    "{a^m b^n | m>0 or n>0} and {a^m b^n | m>0 and n>0}",
                    "{a^m b^n | m>0 and n>0} and {a^m b^n | m>0 or n>=0}",
                    "{a^m b^n | m>=0 or n>0} and {a^m b^n | m>0 and n>0}",
                    "{a^m b^n | m>=0 and n>0} and {a^m b^n | m>0 or n>0}",
                ],
                answer: "{a^m b^n | m>0 and n>0} and {a^m b^n | m>0 or n>=0}",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The language generated by the grammar S -> aSa | bSb | a | b over {a,b} is the set of:",
                options: [
                    "All palindromes",
                    "All odd length palindromes",
                    "Strings that begin and end with the same symbol",
                    "All even length palindromes",
                ],
                answer: "All odd length palindromes",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which of the following strings is generated by the grammar S->aS|A, A->aAb|bAa|ε?",
                options: ["aabbaba", "aabaaba", "abababb", "aabbaab"],
                answer: "aabbaab",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "For the correct answer in the previous question, how many steps are required to derive 'aabbaab' and how many parse trees are there?",
                options: ["6 and 1", "6 and 2", "7 and 2", "4 and 2"],
                answer: "7 and 2",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider a CFG with productions S->AA|B, A->0A|A0|1, B->0B00|1. The language generated is:",
                options: [
                    "{0^n 1 0^2n | n>=1}",
                    "{0^i 1 0^j 1 0^k} U {0^n 1 0^2n}",
                    "{0^i 1 0^j} U {0^n 1 0^2n}",
                    "The set of all strings over {0,1} containing at least two 0's",
                ],
                answer: "The set of all strings over {0,1} containing at least two 0's",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Which of the following statements are true?\n1. Every left-recursive grammar can be converted to a right-recursive one.\n4. Derivation trees of strings from a CFG in Chomsky Normal Form are always binary.",
                options: ["1,2,3,4", "2,3,4 only", "1,3,4 only", "1,2,4 only"],
                answer: "1,2,4 only",
            },
            {
                id: 7,
                type: "msq",
                question:
                    "Consider the languages L1={a^n w a^n | w in {a,b}*}, L2={wxw^R | w,x in {a,b}*, |w|,|x|>0}. Which are TRUE?",
                options: [
                    "L1 and L2 are regular",
                    "L1 and L2 are context-free",
                    "L1 is regular and L2 is context-free",
                    "L1 and L2 are context-free but not regular",
                ],
                answer: ["L1 is regular and L2 is context-free"],
            },
            {
                id: 8,
                type: "msq",
                question:
                    "Consider L1={ww|...}, L2={a^n b^n c^m|...}, L3={a^m b^n c^n|...}. Which are FALSE?",
                options: [
                    "L1 is not context-free but L2 and L3 are deterministic context-free",
                    "Neither L1 nor L2 is context-free",
                    "L2, L3 and L2 intersect L3 are all context-free",
                    "Neither L1 nor its complement is context-free",
                ],
                answer: [
                    "L1 is not context-free but L2 and L3 are deterministic context-free",
                    "Neither L1 nor L2 is context-free",
                    "Neither L1 nor its complement is context-free",
                ],
            },
            {
                id: 9,
                type: "msq",
                question:
                    "For a string w, define w^R as its reverse. Which of the following languages are context-free?",
                options: [
                    "{w x w^R x^R | w,x in {0,1}*}",
                    "{w w^R x x^R | w,x in {0,1}*}",
                    "{w x w^R | w,x in {0,1}*}",
                    "{w x x^R w^R | w,x in {0,1}*}",
                ],
                answer: [
                    "{w w^R x x^R | w,x in {0,1}*}",
                    "{w x w^R | w,x in {0,1}*}",
                    "{w x x^R w^R | w,x in {0,1}*}",
                ],
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Consider L = {a^n | n>=0} U {a^n b^n | n>=0}. Which statements are TRUE?\nI. L is deterministic context-free.\nIII. L is not LL(k) for any k.",
                options: ["I only", "II only", "I and III only", "III only"],
                answer: "I and III only",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider languages L1 = {wxyx | w,x,y in (0+1)+} and L2 = {xy | x,y in (a+b)*, |x|=|y|, x!=y}. Which is TRUE?",
                options: [
                    "L1 is regular and L2 is context-free.",
                    "L1 is context-free but L2 is not context-free.",
                    "Neither L1 nor L2 is context-free.",
                    "L1 is context-free but not regular and L2 is context-free.",
                ],
                answer: "L1 is regular and L2 is context-free.",
            },
            {
                id: 12,
                type: "mcq",
                question: "Which language over Σ={a,b} is NOT context-free?",
                options: [
                    "{ww^R | w in {a,b}*}",
                    "{wa^n b^n w^R | w in {a,b}*, n>=0}",
                    "{wa^n w^R b^n | w in {a,b}*, n>=0}",
                    "{a^n b^i | i in {n,3n,5n}, n>=0}",
                ],
                answer: "{wa^n w^R b^n | w in {a,b}*, n>=0}",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which of the languages are context-free?\nI. {a^m b^n c^p d^q | m+p=n+q}\nII. {a^m b^n c^p d^q | m=n and p=q}",
                options: [
                    "I and IV only",
                    "I and II only",
                    "II and III only",
                    "II and IV only",
                ],
                answer: "I and II only",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider languages L1 = {a^n b^m c^(n+m) | m,n>=1} and L2 = {a^n b^n c^(2n) | n>=1}. Which is TRUE?",
                options: [
                    "Both are context-free",
                    "L1 is context-free, L2 is not",
                    "L2 is context-free, L1 is not",
                    "Neither is context-free",
                ],
                answer: "L1 is context-free, L2 is not",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following languages are context-free?\nL1 = {a^m b^n a^n b^m | m,n>=1}\nL3 = {a^m b^n | m=2n+1}",
                options: [
                    "L1 and L2 only",
                    "L1 and L3 only",
                    "L2 and L3 only",
                    "L3 only",
                ],
                answer: "L1 and L3 only",
            },
        ],
        6: [
            {
                id: 1,
                type: "mcq",
                question: "Which of the following is TRUE about languages?",
                options: [
                    "The language L={a^n b^n | n>=0} is regular.",
                    "The language L={a^n | n is prime} is regular.",
                    "The language L={w | w has 3k+1 b's} is regular.",
                    "The language L={ww | w in {0,1}*} is regular.",
                ],
                answer: "The language L={w | w has 3k+1 b's} is regular.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider languages L1={0^n 1^n}, L2={wcw^r}, L3={ww^r}. Which are deterministic Context-free languages?",
                options: [
                    "None of the languages",
                    "Only L1",
                    "Only L1 and L2",
                    "All the three languages",
                ],
                answer: "Only L1 and L2",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider languages L1={0^i 1^j | i!=j}, L2={0^i 1^j | i=j}, L3={0^i 1^j | i=2j+1}, L4={0^i 1^j | i!=2j}. Which statement is true?",
                options: [
                    "Only L2 is context free",
                    "Only L2 and L3 are context free",
                    "Only L1 and L2 are context free",
                    "All are context free",
                ],
                answer: "All are context free",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider languages L1={a^i b^j c^k | i=j, k>=1} and L2={a^i b^j | j=2i, i>=0}. Which is true?",
                options: [
                    "L1 is not a CFL but L2 is",
                    "L1 intersect L2 = empty and L1 is non-regular",
                    "L1 U L2 is not a CFL but L2 is",
                    "There is a 4 state PDA that accepts L1 but no DPDA for L2",
                ],
                answer: "L1 intersect L2 = empty and L1 is non-regular",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which of the following languages is (are) non-regular? L1={0^m 1^n | 0<=m,n<=10000}, L2={reads same forward and backward}, L3={contains even 0s and 1s}",
                options: [
                    "L2 and L3 only",
                    "L1 and L2 only",
                    "L3 only",
                    "L2 only",
                ],
                answer: "L2 only",
            },
            {
                id: 6,
                type: "msq",
                question:
                    "Let L1 be a regular language and L2 be a context-free language. Which of the following languages is/are context-free?",
                options: [
                    "L1 intersect L2",
                    "L1 U L2",
                    "L1 U (L2 U L2)",
                    "(L1 intersect L2) U (L1 intersect L2)",
                ],
                answer: [
                    "L1 intersect L2",
                    "L1 U L2",
                    "L1 U (L2 U L2)",
                    "(L1 intersect L2) U (L1 intersect L2)",
                ],
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Suppose that L1 is a regular language and L2 is a context-free language. Which one of the following languages is NOT necessarily context-free?",
                options: ["L1 ∩ L2", "L1 . L2", "L1 - L2", "L1 ∪ L2"],
                answer: "L1 - L2",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Let L1, L2 be any two context-free languages and R be any regular language. Which of the following is/are CORRECT? I. L1∪L2 is context-free, II. L1_bar is context-free, III. L1-R is context-free, IV. L1∩L2 is context-free",
                options: [
                    "I, II and IV only",
                    "I and III only",
                    "II and IV only",
                    "I only",
                ],
                answer: "I and III only",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider languages L1={a^n b^n c^m} and L2={a^m b^n c^n}. Which are context-free? I. L1 U L2, II. L1 intersect L2",
                options: ["I only", "II only", "I and II", "Neither I nor II"],
                answer: "I only",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Let P be a regular language and Q be a context-free language such that Q is a subset of P. Which of the following is ALWAYS regular?",
                options: ["P intersect Q", "P - Q", "Sigma* - P", "Sigma* - Q"],
                answer: "Sigma* - P",
            },
            {
                id: 11,
                type: "mcq",
                question: "Which one of the following is FALSE?",
                options: [
                    "There is a unique minimal DFA for every regular language.",
                    "Every NFA can be converted to an equivalent PDA.",
                    "Complement of every context-free language is recursive.",
                    "Every nondeterministic PDA can be converted to an equivalent deterministic PDA.",
                ],
                answer: "Every nondeterministic PDA can be converted to an equivalent deterministic PDA.",
            },
            {
                id: 12,
                type: "msq",
                question:
                    "Consider the following sets: S1: Set of all recursively enumerable languages, S2: Set of all syntactically valid C programs, S3: Set of all languages over {0,1}, S4: Set of all non-regular languages. Which are uncountable?",
                options: ["S1 and S2", "S3 and S4", "S2 and S3", "S1 and S4"],
                answer: ["S3 and S4"],
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Let f be a total function from A* to B*. f is computable if a TM exists that halts with f(x) for input x. Let Lf = {x#f(x)|x in A*}. Which statement is true?",
                options: [
                    "f is computable iff Lf is recursive.",
                    "f is computable iff Lf is recursively enumerable.",
                    "If f is computable then Lf is recursive, but not conversely.",
                    "If f is computable then Lf is recursively enumerable, but not conversely.",
                ],
                answer: "f is computable iff Lf is recursive.",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Let Σ be a finite non-empty alphabet and let 2^Σ* be the power set of Σ*. Which one of the following is TRUE?",
                options: [
                    "Both 2^Σ* and Σ* are countable",
                    "2^Σ* is countable and Σ* is uncountable",
                    "2^Σ* is uncountable and Σ* is countable",
                    "Both 2^Σ* and Σ* are uncountable",
                ],
                answer: "2^Σ* is uncountable and Σ* is countable",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which of the following is true for the language {a^p | p is a prime number}?",
                options: [
                    "It is not accepted by a Turing Machine",
                    "It is regular but not context-free",
                    "It is context-free but not regular",
                    "It is neither regular nor context-free, but accepted by a Turing machine",
                ],
                answer: "It is neither regular nor context-free, but accepted by a Turing machine",
            },
        ],
        7: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the languages L1, L2, L3. L1={0^p 1^q}, L2={0^p 1^q | p=q}, L3={0^p 1^q 0^r | p=q=r}. Which statement is NOT TRUE?",
                options: [
                    "PDA can be used to recognize L1 and L2",
                    "L1 is a regular language",
                    "All the three languages are context free",
                    "Turing machines can be used to recognize all the languages",
                ],
                answer: "All the three languages are context free",
            },
            {
                id: 2,
                type: "msq",
                question:
                    "Which statements are correct?\n(a) Intersection of two regular languages is regular.\n(c) Intersection of two recursive languages is recursive.\n(d) Intersection of two recursively enumerable languages is recursively enumerable.",
                options: ["a", "b", "c", "d"],
                answer: ["a", "c", "d"],
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Consider the languages: L1={a^p|p is prime}, L2={a^n b^m c^2m}, L3={a^n b^n c^2n}, L4={a^n b^n|n>=1}. Which are CORRECT?",
                options: [
                    "I, II and IV only",
                    "II and III only",
                    "I and IV only",
                    "III and IV only",
                ],
                answer: "III and IV only",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider languages L1={0^p 1^q 0^r} and L2={0^p 1^q 0^r | p!=r}. Which statement is FALSE?",
                options: [
                    "L2 is context-free",
                    "L1 intersect L2 is context-free",
                    "Complement of L2 is recursive",
                    "Complement of L1 is context-free but not regular",
                ],
                answer: "Complement of L1 is context-free but not regular",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Match List-I (problem) with List-II (formal language class).\nList-I: A. Checking identifier declaration, C. Matched parentheses\nList-II: 2. X->XbX|... 3. {wcw^R}",
                options: [
                    "A-1,B-3,C-2,D-4",
                    "A-3,B-1,C-4,D-2",
                    "A-3,B-1,C-2,D-4",
                    "A-1,B-3,C-4,D-2",
                ],
                answer: "A-3,B-1,C-2,D-4",
            },
            {
                id: 6,
                type: "msq",
                question:
                    "Which statements are TRUE?\n(b) If L and its complement are RE, then L is recursive.\n(c) Complement of a CFL must be recursive.\n(d) If L1, L2 are regular, L1 intersect L2 must be deterministic context-free.",
                options: ["a", "b", "c", "d"],
                answer: ["b", "c", "d"],
            },
            {
                id: 7,
                type: "mcq",
                question: "Which language is NOT recursive? L={<M>|...}",
                options: [
                    "M is a DFA, L(M) is empty",
                    "M is a DFA, L(M) is Sigma*",
                    "M is a PDA, L(M) is empty",
                    "M is a PDA, L(M) is Sigma*",
                ],
                answer: "M is a PDA, L(M) is Sigma*",
            },
            {
                id: 8,
                type: "mcq",
                question: "The set of all recursively enumerable languages is:",
                options: [
                    "Closed under complementation",
                    "Closed under intersection",
                    "A subset of all recursive languages",
                    "Uncountable",
                ],
                answer: "Closed under intersection",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Consider languages: L1=Regular, L2=CF, L3=Recursive, L4=RE. Which is/are TRUE?\nI. L3_bar U L4 is RE\nIII. L1* intersect L2 is context-free",
                options: [
                    "I only",
                    "I and III only",
                    "I and IV only",
                    "I, II and III only",
                ],
                answer: "I and III only",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "For L1=CF and L2=RE but not recursive, which is necessarily true?\nI. L1_bar is recursive\nIV. L1_bar U L2 is RE",
                options: ["1 only", "3 only", "3 and 4 only", "1 and 4 only"],
                answer: "1 and 4 only",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Let L be a language and L_bar its complement. Which is NOT a viable possibility?",
                options: [
                    "Neither L nor L_bar is RE",
                    "One is RE but not recursive; the other is not RE",
                    "Both are RE but not recursive",
                    "Both are recursive",
                ],
                answer: "Both are RE but not recursive",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Let L1 be recursive. L2, L3 are RE but not recursive. Which statement is not necessarily true?",
                options: [
                    "L2 - L1 is RE",
                    "L1 - L3 is RE",
                    "L2 intersect L3 is RE",
                    "L2 U L3 is RE",
                ],
                answer: "L1 - L3 is RE",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Let L = L1 intersect L2, where L1={a^m b^m c^n b^n} and L2={a^i b^j c^k}. Then L is:",
                options: [
                    "Not recursive",
                    "Regular",
                    "Context-free but not regular",
                    "RE but not context-free",
                ],
                answer: "Context-free but not regular",
            },
            {
                id: 14,
                type: "mcq",
                question: "Which statement is false?",
                options: [
                    "Every NFA can be converted to an equivalent DFA",
                    "Every non-deterministic TM can be converted to an equivalent deterministic TM",
                    "Every regular language is also a CFL",
                    "Every subset of a RE set is recursive",
                ],
                answer: "Every subset of a RE set is recursive",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "If L and L_bar are recursively enumerable, then L is:",
                options: [
                    "regular",
                    "context-free",
                    "context-sensitive",
                    "recursive",
                ],
                answer: "recursive",
            },
        ],
    },
    // dld
    8: {
        1: [
            {
                id: 1,
                type: "nat",
                question:
                    "If x and y are two decimal digits and (0.1101)2 = (0.8xy5)10, the decimal value of x + y is ______.",
                answer: "3",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The representation of the value of a 16-bit unsigned integer X in hexadecimal number system is BCA9. The representation of the value of X in octal number system is:",
                options: ["136251", "736251", "571247", "571244"],
                answer: "136251",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider a quadratic equation x^2 - 13x + 36 = 0 with coefficients in a base b. The solutions of this equation in the same base b are x=5 and x=6. Then b = _____.",
                answer: "8",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Consider the equation (43)x = (y3)8 where x and y are unknown. The number of possible solutions is ______.",
                answer: "5",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "The base (or radix) of the number system such that the equation 312/20 = 13.1 holds is ____________.",
                answer: "5",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "Consider the equation (123)5 = (x8)y with x and y as unknown. The number of possible solutions is ____.",
                answer: "3",
            },
            {
                id: 7,
                type: "mcq",
                question: "(1217)8 is equivalent to:",
                options: ["(1217)16", "(028F)16", "(2297)10", "(0B17)16"],
                answer: "(028F)16",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Let r denote number system radix. The only value(s) of r that satisfy the equation √121 = 11 is/are:",
                options: [
                    "decimal 10",
                    "decimal 11",
                    "decimal 10 and 11",
                    "any value > 2",
                ],
                answer: "any value > 2",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "In 16-bit 2's complement representation, the decimal number -28 is:",
                options: [
                    "1111 1111 0001 1100",
                    "0000 0000 1110 0100",
                    "1111 1111 1110 0100",
                    "1000 0000 1110 0100",
                ],
                answer: "1111 1111 1110 0100",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Two numbers are chosen independently and uniformly at random from the set {1, 2, ..., 13}. The probability (rounded off to 3 decimal places) that their 4-bit (unsigned) binary representations have the same most significant bit is ______.",
                answer: "0.502",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider Z = X - Y, where X, Y, and Z are all in sign-magnitude form. X and Y are each represented in n bits. To avoid overflow, the representation of Z would require a minimum of:",
                options: ["n bits", "n-1 bits", "n+1 bits", "n+2 bits"],
                answer: "n+1 bits",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the unsigned 8-bit fixed point binary number representation b7b6b5b4.b3b2b1b0. Which of the following decimal numbers cannot be represented exactly?\n(i) 31.500 (ii) 0.875 (iii) 12.100 (iv) 3.001",
                options: [
                    "None can be exactly represented",
                    "Only (ii) cannot be exactly represented",
                    "Only (iii) and (iv) cannot be exactly represented",
                    "Only (i) and (ii) cannot be exactly represented",
                ],
                answer: "Only (iii) and (iv) cannot be exactly represented",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "When two 8-bit numbers in 2's complement are added using a ripple-carry adder, an overflow is said to have occurred if:",
                options: [
                    "The carry bit C7 is 1",
                    "All carry bits (C7...C0) are 1",
                    "(A7.B7.S7' + A7'.B7'.S7) is 1",
                    "(A0.B0.S0' + A0'.B0'.S0) is 1",
                ],
                answer: "(A7.B7.S7' + A7'.B7'.S7) is 1",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Consider an eight-bit ripple-carry adder for computing A+B in 2's complement. If the decimal value of A is one, the decimal value of B that leads to the longest latency for the sum to stabilize is _________.",
                answer: "-1",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Let X be the number of distinct 16-bit integers in 2's complement representation. Let Y be the number of distinct 16-bit integers in sign-magnitude representation. Then X-Y is _________.",
                answer: "1",
            },
        ],
        2: [
            {
                id: 1,
                type: "nat",
                question:
                    "The 16-bit 2's complement representation of an integer is 1111 1111 1111 0101; its decimal representation is___.",
                answer: "-11",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The smallest integer that can be represented by an 8-bit number in 2’s complement form is:",
                options: ["-256", "-128", "-127", "0"],
                answer: "-128",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "P is a 16-bit signed integer. The 2's complement representation of P is (F87B)16. The 2's complement representation of 8*P is:",
                options: ["(C3D8)16", "(187B)16", "(F878)16", "(987B)16"],
                answer: "(C3D8)16",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The dual of a Boolean function F(x1,...,xn,+,.,') is FD. F is self-dual if F=FD. The number of self-dual functions with n Boolean variables is:",
                options: ["2^n", "2^(n-1)", "2^(2^n)", "2^(2^(n-1))"],
                answer: "2^(2^(n-1))",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "If w, x, y, z are Boolean variables, which one of the following is INCORRECT?",
                options: [
                    "wx + w(x+y) + x(x+y) = x + wy",
                    "wx'(y+z')' + w'x = w'+x+y'z",
                    "(wx'(y+xz') + w'x')y = xy'",
                    "(w+y)(wxy+wyz) = wxy+wyz",
                ],
                answer: "(wx'(y+xz') + w'x')y = xy'",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The binary operator ≠ is defined by a truth table where p≠q is true iff p and q have different values. Which of the following is true about this operator?",
                options: [
                    "Both commutative and associative",
                    "Commutative but not associative",
                    "Not commutative but associative",
                    "Neither commutative nor associative",
                ],
                answer: "Commutative but not associative",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "The number of min-terms after minimizing the Boolean expression [D' + AB' + A'C + AC'D + A'C'D]' is ______.",
                options: ["1", "2", "3", "4"],
                answer: "1",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Given the function F = P' + QR, which of the following statements is true?\n(S1) F = Σ(4, 5, 6)\n(S2) F = Σ(0,1,2,3,7)",
                options: [
                    "S1-False, S2-True",
                    "S1-True, S2-False",
                    "S1-False, S2-False",
                    "S1-True, S2-True",
                ],
                answer: "S1-True, S2-False",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "The truth table with inputs X,Y and output F(X,Y) as {00->0, 01->0, 10->1, 11->1} represents the Boolean function:",
                options: ["x", "x+y", "x⊕y", "y"],
                answer: "x",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The amount of ROM needed to implement a 4-bit multiplier is:",
                options: ["64 bits", "128 bits", "1 Kbits", "2 Kbits"],
                answer: "2 Kbits",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "The simplified SOP form of the boolean expression (P+Q'+R') . (P+Q'+R) . (P+Q+R') is:",
                options: ["(P'.Q+R)", "(P'+Q'.R')", "(P'.Q+R)", "(P.Q+R)"],
                answer: "(P.Q+R)",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "The minterm expansion of f(P,Q,R) = PQ + QR' + PR' is:",
                options: [
                    "m2+m4+m6+m7",
                    "m0+m1+m3+m5",
                    "m0+m1+m6+m7",
                    "m2+m3+m4+m5",
                ],
                answer: "m2+m4+m6+m7",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "If P, Q, R are Boolean variables, then (P+Q')(P.Q'+P.R)(P'.R'+Q') simplifies to:",
                options: ["P.Q", "P.R", "P.Q+R", "P.R+Q"],
                answer: "P.Q",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Let x1⊕x2⊕x3⊕x4=0 where xi are Boolean variables. Which one of the following must always be TRUE?",
                options: [
                    "x1x2x3x4=0",
                    "x1x3+x2=0",
                    "x1'⊕x3' = x2'⊕x4'",
                    "x1+x2+x3+x4=0",
                ],
                answer: "x1'⊕x3' = x2'⊕x4'",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the Boolean operator # with properties: x#0=x, x#1=x', x#x=0, x#x'=1. Then x#y is equivalent to:",
                options: ["x'y' + x'y", "x'y + x'y'", "x'y + xy", "xy + x'y'"],
                answer: "xy + x'y'",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the Boolean function z(a,b,c) implemented by a circuit with inputs a,b,c. Which minterm list represents the circuit?",
                options: [
                    "Z = Σ(0,1,3,7)",
                    "Z = Σ(2,4,5,6,7)",
                    "Z = Σ(1,4,5,6,7)",
                    "Z = Σ(2,3,5)",
                ],
                answer: "Z = Σ(1,4,5,6,7)",
            },
            {
                id: 2,
                type: "mcq",
                question: "Which one of the following is NOT a valid identity?",
                options: [
                    "(x+y)⊕z = x⊕(y+z)",
                    "(x⊕y)⊕z = x⊕(y⊕z)",
                    "x⊕y = x+y, if xy=0",
                    "x⊕y = (xy+x'y')'",
                ],
                answer: "(x+y)⊕z = x⊕(y+z)",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "What is the minimum number of 2-input NOR gates required to implement f = Σ(0,2,5,7,8,10,13,15)? Assume all inputs and their complements are available.",
                options: ["3", "4", "5", "Not specified"],
                answer: "3",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "For three 4-variable functions f1, f2, f3, given their sum-of-minterms, what is the output function f of a circuit with one AND gate (inputs f1', f2) and one XOR gate (inputs from AND output and f3)?",
                options: [
                    "Σ(2,14)",
                    "Σ(7,8,11)",
                    "Σ(2,7,8,11,14)",
                    "Σ(0,2,3,5,6,7,8,11,14,15)",
                ],
                answer: "Σ(7,8,11)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Let ⊕ and ⊙ denote Exclusive OR and Exclusive NOR. Which of the following is NOT CORRECT?",
                options: [
                    "P⊕Q' = P⊙Q",
                    "P'⊕Q = P⊙Q",
                    "P'⊕Q' = P⊕Q",
                    "(P⊕P')⊕Q = (P⊙P')⊙Q'",
                ],
                answer: "(P⊕P')⊕Q = (P⊙P')⊙Q'",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Let ⨁ denote the XOR operation. Consider F(P,Q) = ((1⨁P)⨁(P⨁Q))⨁((P⨁Q)⨁(Q⨁0)). The equivalent expression for F is:",
                options: ["P+Q", "(P+Q)'", "P⨁Q", "(P⨁Q)'"],
                answer: "(P⨁Q)'",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which one of the following expressions does NOT represent exclusive NOR of x and y?",
                options: ["xy+x'y'", "x⊕y'", "x'⊕y", "x'⊕y'"],
                answer: "x'⊕y'",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which of the following circuits is NOT equivalent to a 2-input X-NOR gate?",
                options: ["(a)", "(b)", "(c)", "(d)"],
                answer: "(d)",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the Boolean expression for the output f of the combinational logic circuit of NOR gates given?",
                options: ["Q'+R'", "P'+Q'", "P'+R'", "P'+Q'+R'"],
                answer: "P'+Q'+R'",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "A set of Boolean connectives is functionally complete if all Boolean functions can be synthesized using them. Which of the following sets is NOT functionally complete?",
                options: [
                    "EX-NOR",
                    "implication, negation",
                    "OR, negation",
                    "NAND",
                ],
                answer: "EX-NOR",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Given f1, f3, and f in canonical sum of products for the circuit, what is f2? F1=Σm(4,5,6,7,8), F3=Σm(1,6,15), F=Σm(1,6,8,15).",
                options: ["Σm(4,6)", "Σm(4,8)", "Σm(6,8)", "Σm(4,6,8)"],
                answer: "Σm(6,8)",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "The total number of prime implicants of the function f(w,x,y,z) = Σ(0, 2, 4, 5, 6, 10) is _____.",
                answer: "3",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "Consider F(P,Q,R,S) = Σm(0,2,5,7,9,11) + d(3,8,10,12,14). The number of essential prime implicants of the function F is _______.",
                answer: "3",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which is a minimum product-of-sums (POS) form of f(w,x,y,z) = Σm(0,1,2,3,7,8,10) + Σd(5,6,11,15)?",
                options: [
                    "(w'+z')(x'+z)",
                    "(w'+z)(x+z)",
                    "(w+z)(x'+z)",
                    "(w+z')(x'+z)",
                ],
                answer: "(w'+z')(x'+z)",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider F(P,Q,R,S) = PQ + P'QR + P'QR'S. The minimal sum-of-products form of F is:",
                options: [
                    "PQ+QR+QS",
                    "P+Q+R+S",
                    "P'+Q'+R'+S'",
                    "P'R + P'R'S + P",
                ],
                answer: "PQ+QR+QS",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the minterm expression F(P,Q,R,S) = Σ(0,2,5,7,8,10,13,15) with don't care terms 2,7,8,13. The minimal sum-of-products form for F is:",
                options: [
                    "Q'S' + QS",
                    "Q'S + QS'",
                    "Q'R'S' + QRS + Q'RS + QR'S",
                    "P'Q'S' + PQS' + P'QS + PQS",
                ],
                answer: "Q'S' + QS",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "What is the minimal form of the Karnaugh map shown below? (X denotes a don't care term)",
                options: [
                    "b'd'",
                    "b'd' + b'c'",
                    "b'd' + a'b'c'd'",
                    "b'd' + b'c' + c'd'",
                ],
                answer: "b'd' + b'c'",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "In the Karnaugh map shown, X denotes a don’t care term. What is the minimal form of the function represented?",
                options: [
                    "b'd'+a'd'",
                    "a'b'+b'd'+a'b'd'",
                    "b'd'+a'b'd'",
                    "a'b'+b'd'+a'd'",
                ],
                answer: "a'b'+b'd'+a'd'",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Consider the Boolean function f(A,B,C,D) = Σ(2,3,6,7,8,9,10,11,12,13). The function is:",
                options: [
                    "independent of one variable",
                    "independent of two variables",
                    "independent of three variable",
                    "dependent on all the variables",
                ],
                answer: "independent of one variable",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "Consider an eight-bit ripple-carry adder for computing A+B in 2's complement. If A=1, the decimal value of B that leads to the longest sum stabilization latency is _____.",
                answer: "-1",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The output of a 2-input multiplexer is connected back to one of its inputs. This circuit is equivalent to a:",
                options: [
                    "D Flip-flop",
                    "D Latch",
                    "Half-adder",
                    "Demultiplexer",
                ],
                answer: "D Latch",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider a combination of T and D flip-flops where the output of each is connected to the input of the other. Initially, Q0=1, Q1=1. What are the outputs Q1Q0 after the 3rd and 4th cycles?",
                options: ["11 and 00", "11 and 01", "00 and 11", "01 and 01"],
                answer: "11 and 00",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A positive edge-triggered D flip-flop is connected to a JK flip-flop. The Q of D-FF goes to J and K of JK-FF. The Q of JK-FF goes to D of D-FF. What is the bit sequence at the Q output of the JK flip-flop?",
                options: [
                    "0110110...",
                    "0100100...",
                    "011101110...",
                    "011001100...",
                ],
                answer: "0110110...",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A synchronous sequential circuit built using JK flip-flops is initialized with Q2Q1Q0=000. What is the state sequence for the next 3 clock cycles?",
                options: [
                    "001, 010, 011",
                    "111, 110, 101",
                    "100, 110, 111",
                    "100, 011, 001",
                ],
                answer: "100, 110, 111",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The minimum number of D flip-flops needed to design a mod-258 counter is:",
                options: ["9", "8", "512", "258"],
                answer: "9",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Consider a circuit with three D-type flip-flops in a counter configuration. If all flip-flops were reset to 0 at power on, what is the total number of distinct outputs (states) generated?",
                options: ["3", "4", "5", "6"],
                answer: "5",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider a circuit with three D-type flip-flops. If at some instance prior to the clock edge, P, Q, and R have values 0, 1, and 0 respectively, what shall be the value of PQR after the clock edge?",
                options: ["000", "001", "010", "011"],
                answer: "011",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Consider a state diagram realized by a JK flip-flop. The Boolean expressions for J and K are:",
                options: [
                    "(x⊕y)' and (x⊕y)'",
                    "(x⊕y)' and (x⊕y)",
                    "x⊕y and (x⊕y)'",
                    "x⊕y and x⊕y",
                ],
                answer: "x⊕y and (x⊕y)'",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "In the sequential circuit shown, if the initial value of Q1Q0 is 00, what are the next four values of Q1Q0?",
                options: [
                    "11,10,01,00",
                    "10,11,01,00",
                    "10,00,01,11",
                    "11,10,00,01",
                ],
                answer: "11,10,01,00",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider a sequential digital circuit of T and D flip-flops. At the beginning, Q1, Q2, Q3 are 0,1,1. Which value of (Q1,Q2,Q3) can NEVER be obtained?",
                options: ["(0,0,1)", "(1,0,0)", "(1,0,1)", "(1,1,1)"],
                answer: "(1,0,0)",
            },
        ],
        5: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider a 3-bit counter designed using T flip-flops. Assuming the initial state is 000, what are the next three states?",
                options: [
                    "011,101,000",
                    "001,010,111",
                    "011,101,111",
                    "001,010,000",
                ],
                answer: "001,010,111",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The minimum number of JK flip-flops required to construct a synchronous counter with the count sequence (0,0,1,1,2,2,3,3,0,0...) is:",
                options: ["2", "3", "4", "5"],
                answer: "3",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider the sequential circuit shown, where both flip-flops are positive edge-triggered D flip-flops. The number of states in the state transition diagram that have a transition back to the same state on some value of 'in' is ______.",
                answer: "2",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The next state table of a 2-bit saturating up-counter is given. The expressions for T1 and T0 are:",
                options: [
                    "T1=Q1Q0, T0=Q1'Q0'",
                    "T1=Q1'Q0, T0=Q1'+Q0'",
                    "T1=Q1+Q0, T0=Q1'+Q0'",
                    "T1=Q1'Q0, T0=Q1+Q0",
                ],
                answer: "T1=Q1'Q0, T0=Q1+Q0",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider a 4-bit Johnson counter with an initial value of 0000. The counting sequence of this counter is:",
                options: [
                    "0,1,3,7,15,14,12,8,0",
                    "0,1,3,5,7,9,11,13,15,0",
                    "0,2,4,6,8,10,12,14,0",
                    "0,8,12,14,15,7,3,1,0",
                ],
                answer: "0,8,12,14,15,7,3,1,0",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Let k=2^n. A circuit is built by giving the output of an n-bit binary counter as input to an n-to-2^n bit decoder. This circuit is equivalent to a:",
                options: [
                    "k-bit binary up counter",
                    "k-bit binary down counter",
                    "k-bit ring counter",
                    "k-bit Johnson counter",
                ],
                answer: "k-bit ring counter",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "How many 32K x 1 RAM chips are needed to provide a memory capacity of 256K-bytes?",
                options: ["8", "32", "64", "128"],
                answer: "64",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The amount of ROM needed to implement a 4-bit multiplier is:",
                options: ["64 bits", "128 bits", "1 Kbits", "2 Kbits"],
                answer: "2 Kbits",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "If there are m input lines and n output lines for a decoder that is used to uniquely address a byte-addressable 1 KB RAM, then the minimum value of m + n is ____.",
                answer: "1034",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What Boolean function does the circuit below realize? (3-to-8 decoder with inputs x,y,z and OR gate)",
                options: ["xz + x'z", "x'z' + xz", "x'y + yz", "xy' + y'z'"],
                answer: "x'z' + xz",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "In the truth table, V=1 if the input is valid. What function does the truth table represent?",
                options: [
                    "Priority encoder",
                    "Decoder",
                    "Multiplexer",
                    "Demultiplexer",
                ],
                answer: "Priority encoder",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "A Boolean digital circuit is composed of two 4-input MUX (M1, M2) and one 2-input MUX (M3). Which set of values for (X0-X7) realizes the function A'+A.C+A.B'.C?",
                options: [
                    "(1,1,0,0,1,1,1,0)",
                    "(1,1,0,0,1,1,0,1)",
                    "(1,1,0,1,1,1,0,0)",
                    "(0,0,1,1,0,1,1,1)",
                ],
                answer: "(1,1,0,1,1,1,0,0)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which circuit implements the Boolean function f(x,y,z) = m0+m1+m3+m4+m5+m6?",
                options: ["(a)", "(b)", "(c)", "(d)"],
                answer: "(a)",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "A multiplexer is placed between a group of 32 registers and an accumulator. The number of select lines needed for the multiplexer is ____.",
                answer: "5",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider the 4-to-1 multiplexer with select lines S1 and S0. The minimal sum of products for the output F is:",
                options: [
                    "PQ + Q'R + PQR",
                    "PQ + P'QR + P'Q'R + P'QR'",
                    "P'Q'R + P'QR' + QR + PQR",
                    "P'QR'",
                ],
                answer: "PQ + Q'R + PQR",
            },
        ],
    },
    //ds&c
    9: {
        1: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Suppose n and p are unsigned int variables in a C program. We wish to set p to nC3. If n is large, which of the following statements is most likely to set p correctly?",
                options: [
                    "p = n * (n - 1) * (n - 2) / 6;",
                    "p = n * (n - 1) / 2 * (n - 2) / 3;",
                    "p = n * (n - 1) / 3 * (n - 2) / 2;",
                    "p = n * (n - 1) * (n - 2) / 6.0;",
                ],
                answer: "p = n * (n - 1) / 2 * (n - 2) / 3;",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "What is printed by the ANSI C program with `char a='P', b='x'; char c=(a&b)+'*'; ...` and given ASCII values?",
                options: ["z K S", "122 75 83", "* - +", "P x +"],
                answer: "z K S",
            },
            {
                id: 3,
                type: "nat",
                question:
                    'What is the output of the C program: `int m=10; int n,n1; n=++m; n1=m++; n--; --n1; n-=n1; printf("%d", n);`?',
                answer: "0",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Consider the C program: `#include<stdio.h> int main(){ float sum=0.0, j=1.0, i=2.0; while(i/j > 0.0625){ j=j+j; sum=sum+i/j; } ...}`. The number of times the variable sum will be printed is _________.",
                answer: "5",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the C program fragment for dividing x by y using repeated subtractions. Which condition on variables x, y, q, r before execution ensures the loop terminates satisfying x == (y*q+r)?",
                options: [
                    "(q==r) && (r==0)",
                    "(x>0) && (r==x) && (y>0)",
                    "(q==0) && (r==x) && (y>0)",
                    "(q==0) && (y>0)",
                ],
                answer: "(q==0) && (r==x) && (y>0)",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The function `int max(int *p, int n)` computes the maximum value in an array. What is the missing loop condition for `while(______)`?",
                options: ["a != n", "b != 0", "b > (a+1)", "b != a"],
                answer: "b != a",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which test suite ensures statement coverage of S1, S2, S3, S4 in the given pseudo-code with if-else statements?",
                options: ["T1, T2, T3", "T2, T4", "T3, T4", "T1, T2, T4"],
                answer: "T1, T2, T4",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "For the pseudo-code `q:=0; r:=x; while r>=y do {r:=r-y; q:=q+1;}`, what is the post-condition that needs to be satisfied after termination?",
                options: [
                    "{r=qx+y ∧ r<y}",
                    "{x=qy+r ∧ r<y}",
                    "{y=qx+r ∧ 0<r<y}",
                    "{q+1<r-y ∧ y>0}",
                ],
                answer: "{x=qy+r ∧ r<y}",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Given the function `double f(double x){ if(abs(x*x-3)<0.01) return x; else return f(x/2+1.5/x); }`, what value of q will f(q) return?",
                answer: "1.73",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Choose the correct option to fill ?1 and ?2 in the C program to print an input string in reverse order.",
                options: [
                    "?1 is (getchar()!='\\n'), ?2 is getchar(c)",
                    "?1 is (c=getchar())!='\\n'), ?2 is getchar(c)",
                    "?1 is (c!='\\n'), ?2 is putchar(c)",
                    "?1 is ((c=getchar())!='\\n'), ?2 is putchar(c)",
                ],
                answer: "?1 is ((c=getchar())!='\\n'), ?2 is putchar(c)",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "Consider the C program with a switch-case inside a for loop. The number of times the printf statement is executed is _____.",
                answer: "10",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the ANSI C program with a for loop `for(j=-3; j<=3; j++)`. Which one of the following options is correct?",
                options: [
                    "The program will not compile successfully",
                    "The program will compile successfully and output 10 when executed",
                    "The program will compile successfully and output 8 when executed",
                    "The program will compile successfully and output 13 when executed",
                ],
                answer: "The program will compile successfully and output 10 when executed",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the value returned when `fun(2^40)` is called, where `fun` involves two nested loops dependent on the input `n`?",
                options: ["4", "5", "6", "40"],
                answer: "5",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The output of executing the C program with the `total(v)` function that counts set bits is ___________.",
                answer: "23",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "The function `exp(X, Y)` computes X^Y. Which condition is TRUE before every iteration of the loop?",
                options: [
                    "X^Y = a^b",
                    "(res*a)^Y = (res*X)^b",
                    "X^Y = res * a^b",
                    "X^Y = (res*a)^b",
                ],
                answer: "X^Y = res * a^b",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Consider the pseudo code: `D=2; for i=1 to n do for j=i to n do for k=j+1 to n do D=D*3`. What is the total number of multiplications?",
                options: [
                    "Half of the product of 3 consecutive integers.",
                    "One-third of the product of 3 consecutive integers.",
                    "One-sixth of the product of 3 consecutive integers.",
                    "None of the above",
                ],
                answer: "One-sixth of the product of 3 consecutive integers.",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Invocation of `foo(3)` and `bar(3)` will result in: (foo uses `val--`, bar uses `val-1` in recursion)",
                options: [
                    "Return of 6 and 6 respectively.",
                    "Infinite loop and abnormal termination respectively",
                    "Abnormal termination and infinite loop respectively",
                    "Both terminating abnormally.",
                ],
                answer: "Abnormal termination and infinite loop respectively",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "What is the output of the C program `void count(int n){...}` when `main` calls `count(3)`?",
                options: ["312213444", "312111222", "3122134", "3121112"],
                answer: "3122134",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "What is the return value of `foo(513, 2)` where `foo(n, r)` recursively calculates the sum of digits in base r?",
                options: ["9", "8", "5", "2"],
                answer: "2",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "If `get(6)` is called, how many times will the `get()` function be invoked before returning to main?",
                options: ["15", "25", "35", "45"],
                answer: "25",
            },
            {
                id: 6,
                type: "mcq",
                question: 'The output of `foo("ABCD EFGH")` is:',
                options: ["ABCD EFGH", "ABCD", "HGFE DCBA", "DCBA"],
                answer: "DCBA",
            },
            {
                id: 7,
                type: "nat",
                question: "The return value of `fun(5)` is:",
                answer: "51",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "The value returned by `func(435)` which counts the number of bits in a number is:",
                answer: "9",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What output will be generated by the C code segment with two `prtFun` calls and `static int a` declarations?",
                options: [
                    "3 1, 4 1, 4 2",
                    "4 2, 6 2, 2 0",
                    "4 2, 6 2, 4 2",
                    "3 1, 4 1, 2 0",
                ],
                answer: "4 2, 6 2, 2 0",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What output is generated if Line 1 is `auto int a=1` and Line 2 is `register int a=2`?",
                options: ["3 1, 4 1", "3 1, 5 2", "4 2, 5 2", "4 2, 4 2"],
                answer: "3 1, 5 2",
            },
            {
                id: 11,
                type: "mcq",
                question: "What is the return value of `foo(345, 10)`?",
                options: ["345", "12", "5", "3"],
                answer: "12",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "The value printed by `fun(5, &x)` where x is initially 15 is:",
                options: ["6", "8", "14", "15"],
                answer: "8",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The return value of `fun2(5)` where `fun1` is a recursive function with a static counter is:",
                answer: "55",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The output of the program with `x+=f1()+f2()+f3()+f2()` is:",
                answer: "230",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    'What does the following C program print? `char s1[7]="1234", *p=s1+2; *p=\'0\'; printf("%s", s1);`',
                options: ["12", "120400", "1204", "1034"],
                answer: "1204",
            },
        ],
        3: [
            {
                id: 1,
                type: "mcq",
                question:
                    'Which of the following statements is TRUE about the program `int *pi=&i; scanf("%d", pi);`?',
                options: [
                    "Compilation fails",
                    "Execution results in a run-time error",
                    "Value printed is 5 more than address of i",
                    "Value printed is 5 more than integer value entered",
                ],
                answer: "Value printed is 5 more than integer value entered",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    'What is the value printed by the C program `int a[]={12,7,13,4,11,6}; printf("%d", f(a,6));`?',
                options: ["-9", "5", "15", "19"],
                answer: "5",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "What does the program `int i=0, j=1; void f(int *p, int *q){p=q; *p=2;} ... f(&i, &j);` print?",
                options: ["2 2", "2 1", "0 1", "0 2"],
                answer: "0 2",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "On which of the following contents of Y and x does the binary search program fail?",
                options: [
                    "Y=[1..10], x<10",
                    "Y=[1 3..19], x<1",
                    "Y=[2 2..2], x>2",
                    "Y=[2 4..20], 2<x<20 and x is even",
                ],
                answer: "Y=[2 4..20], 2<x<20 and x is even",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "What is the correction needed in the binary search program to make it work properly?",
                options: [
                    "change line 6 to: if(Y[k]<x) i=k+1; else j=k-1;",
                    "change line 6 to: if(Y[k]<x) i=k-1; else j=k+1;",
                    "change line 6 to: if(Y[k]<x) i=k; else j=k;",
                    "change line 7 to: while((Y[k]==x) && (i<j));",
                ],
                answer: "change line 6 to: if(Y[k]<x) i=k+1; else j=k-1;",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The output of the program with `fun1(s1,s2)` and `fun2(&s1,&s2)` is:",
                options: [
                    "Hi Bye Bye Hi",
                    "Hi Bye Hi Bye",
                    "Bye Hi Hi Bye",
                    "Bye Hi Bye Hi",
                ],
                answer: "Hi Bye Bye Hi",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "What is the output of the program `void printlength(char *s, char *t){...}` with inputs 'abc' and 'defgh'?",
                answer: "3",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    'What does the C fragment `printf("%s", p+p[3]-p[1]);` print, where `char c[]="GATE 2011"; char *p=c;`?',
                options: ["GATE 2011", "E 2011", "2011", "011"],
                answer: "2011",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is printed by the program: `int a[3][3][3] = {{...}}; ...`?",
                options: [
                    "1 2 3, 10 11 12, 19 20 21",
                    "1 4 7, 10 13 16, 19 22 25",
                    "1 2 3, 4 5 6, 7 8 9",
                    "1 2 3, 13 14 15",
                ],
                answer: "1 2 3, 10 11 12, 19 20 21",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Let Z be an array of 10 elements with Z[i]=1 for all i. The value returned by SimpleFunction(Z, 10, 2) is:",
                answer: "1023",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    'What is the output of the C program: `int arr[4][5]; ... for(...) arr[i][j]=10*i+j; ... printf("%d", *(arr[1]+9));`?',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
            {
                id: 12,
                type: "nat",
                question:
                    'The output of the C program with a 2D array `a` and `printf("%d", *(*(a+**a+2)+3));` is:',
                answer: "19",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The value returned by `pp(3,4)` where `tob` converts to binary and `pp` performs calculations is:",
                answer: "81",
            },
            {
                id: 14,
                type: "nat",
                question:
                    'The number that will be displayed on execution of `int arr[]={...}, *ip=arr+4; printf("%d", ip[1]);` is:',
                answer: "6",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "The output of the C program with a loop `sum = sum + (*b-i) - *(b-i);` is:",
                answer: "10",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "What is the output of the C program: `struct Ournode p={'1','0','a'+2}; struct Ournode *q=&p; printf(\"%c,%c\",*((char*)q+1),*((char*)q+2));`?",
                options: ["0, c", "0, a+2", "'0', 'a+2'", "'0', 'c'"],
                answer: "'0', 'c'",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The C code `int *x=malloc(...); x=assignval(x,0); if(x) {x=(int*)malloc(...); x=assignval(x,10);}` suffers from which problem?",
                options: [
                    "compiler error (malloc cast)",
                    "compiler error (x==NULL)",
                    "dangling pointer",
                    "memory leak",
                ],
                answer: "memory leak",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "The output of the C program that repeatedly swaps elements in an array `[3,5,1,4,6,2]` is:",
                answer: "3",
            },
            {
                id: 4,
                type: "nat",
                question:
                    'The output of the C program with `strlen(c+2[p]-6[p]-1)` for `char* c="GATECSIT2017";` is:',
                answer: "2",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "The output of invoking `printxy(1,1)` where `void printxy(int x, int y){...}` is:",
                options: ["0, 0", "0, 1", "1, 0", "1, 1"],
                answer: "1, 0",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Match the following: P. static char var, Q. m=malloc(10); m=NULL;, R. char *ptr[10];, S. register int var1;",
                options: [
                    "P→(ii),Q→(iv),R→(i),S→(iii)",
                    "P→(ii),Q→(i),R→(iv),S→(iii)",
                    "P→(ii),Q→(iv),R→(iii),S→(i)",
                    "P→(iii),Q→(iv),R→(i),S→(ii)",
                ],
                answer: "P→(ii),Q→(iv),R→(i),S→(iii)",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "The value printed by the program with `f(int *p, int n)` is:",
                answer: "3",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "The value printed by the program `void f(int *p, int m){...}` is:",
                answer: "30",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the output of the pseudo-code with parameters passed by reference and dynamic scoping?",
                options: ["6, 2", "6, 6", "4, 2", "4, 4"],
                answer: "4, 2",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "The output of the program `void mystery(int*ptra,int*ptrb){...}` is:",
                answer: "2016",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which expression, when placed in the blank in `void main(){...; ______;}` will NOT result in a type checking error?",
                options: ["f(s, *s)", "i=f(i, s)", "f(i, *s)", "f(i, *p)"],
                answer: "f(i, *p)",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "The output of the program with `static int a[]` and `static int *p[]` is:",
                answer: "140",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    'What is printed by the program `printf("%d", *(arr[1]+9));`?',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
            {
                id: 14,
                type: "nat",
                question:
                    'The output of the program `printf("%d", *(*(a+**a+2)+3));` is:',
                answer: "19",
            },
            {
                id: 15,
                type: "nat",
                question: "The value returned by `pp(3, 4)` is:",
                answer: "81",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    'The number that will be displayed by `printf("%d\\n", ip[1]);` is:',
                answer: "6",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "The output of the C program with `sum = sum + (*b - i) - *(b - i);` is:",
                answer: "10",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    'The output of the program with `struct Ournode p` and `printf("%c, %c", ...)` is:',
                options: ["0, c", "0, a+2", "'0', 'a+2'", "'0', 'c'"],
                answer: "'0', 'c'",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The C code with `malloc` and `assignval` suffers from which problem?",
                options: [
                    "compiler error (malloc cast)",
                    "compiler error (x==NULL)",
                    "dangling pointer",
                    "memory leak",
                ],
                answer: "memory leak",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "The output of the program that swaps elements in array `[3,5,1,4,6,2]` is:",
                answer: "3",
            },
            {
                id: 6,
                type: "nat",
                question:
                    'The output of `printf("%d", (int)strlen(c+2[p]-6[p]-1));` is:',
                answer: "2",
            },
            {
                id: 7,
                type: "mcq",
                question: "The output of invoking `printxy(1,1)` is:",
                options: ["0, 0", "0, 1", "1, 0", "1, 1"],
                answer: "1, 0",
            },
            {
                id: 8,
                type: "mcq",
                question: "Match the following items.",
                options: [
                    "P→(ii),Q→(iv),R→(i),S→(iii)",
                    "P→(ii),Q→(i),R→(iv),S→(iii)",
                    "P→(ii),Q→(iv),R→(iii),S→(i)",
                    "P→(iii),Q→(iv),R→(i),S→(ii)",
                ],
                answer: "P→(ii),Q→(iv),R→(i),S→(iii)",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "The value printed by the program `int f(int *p, int n){...}` is:",
                answer: "3",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "The value printed by the program `void f(int *p, int m){...}` is:",
                answer: "30",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the output of the pseudo-code with pass by reference and dynamic scoping?",
                options: ["6, 2", "6, 6", "4, 2", "4, 4"],
                answer: "4, 2",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "The output of the program `void mystery(int*ptra,int*ptrb){...}` when called with `mystery(&a, &b)` is:",
                answer: "2016",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "Which expression will NOT result in a type checking error for `void f(int, short)`?",
                options: ["f(s, *s)", "i=f(i,s)", "f(i,*s)", "f(i,*p)"],
                answer: "f(i,*p)",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The output of the C program with `static int a[]` and `static int *p[]` is:",
                answer: "140",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    'Consider the C program: `int a[3][3][3] = {...}; ... for(i=0;i<3;i++) { for(j=0;j<3;j++) { for(k=0;k<3;k++) printf("%d ", a[i][j][k]); } }`. What is printed?',
                options: [
                    "1 2 3 4 5 6 7 8 9 10 11 12 ...",
                    "1 2 3 \n 10 11 12 \n ...",
                    "1 4 7 \n 10 13 16 \n ...",
                    "1 2 3 \n 4 5 6 \n ...",
                ],
                answer: "1 2 3 \n 10 11 12 \n ...",
            },
        ],
        6: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider `SimpleFunction(int Y[], int n, int x)`. If Z is an array of 10 elements with Z[i]=1, the value returned by `SimpleFunction(Z, 10, 2)` is:",
                answer: "1023",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    'What is the output of the C program with `arr[i][j] = 10*i+j;` and `printf("%d", *(arr[1]+9));`?',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
            {
                id: 3,
                type: "nat",
                question:
                    'The output of the C program with a 2D array `a` and `printf("%d", *(*(a+**a+2)+3));` is:',
                answer: "19",
            },
            {
                id: 4,
                type: "nat",
                question: "The value returned by `pp(3, 4)` is:",
                answer: "81",
            },
            {
                id: 5,
                type: "nat",
                question:
                    'The number displayed by `printf("%d\\n", ip[1]);` is:',
                answer: "6",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "The output of the program `sum = sum + (*b - i) - *(b - i);` is:",
                answer: "10",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "What is the output of the program `struct Ournode p={'1','0','a'+2};...`?",
                options: ["0, c", "0, a+2", "'0', 'a+2'", "'0', 'c'"],
                answer: "'0', 'c'",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The code `int *x=malloc(...); ... if(x){x=(int*)malloc(...);}` suffers from:",
                options: [
                    "compiler error (malloc cast)",
                    "compiler error (x==NULL)",
                    "dangling pointer",
                    "memory leak",
                ],
                answer: "memory leak",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "The output of the C program that repeatedly swaps elements in `[3,5,1,4,6,2]` is:",
                answer: "3",
            },
            {
                id: 10,
                type: "nat",
                question:
                    'The output of `printf("%d", (int)strlen(c+2[p]-6[p]-1));` is:',
                answer: "2",
            },
            {
                id: 11,
                type: "mcq",
                question: "What is the output of invoking `printxy(1,1)`?",
                options: ["0, 0", "0, 1", "1, 0", "1, 1"],
                answer: "1, 0",
            },
            {
                id: 12,
                type: "mcq",
                question: "Match the following items.",
                options: [
                    "P→(ii),Q→(iv),R→(i),S→(iii)",
                    "P→(ii),Q→(i),R→(iv),S→(iii)",
                    "P→(ii),Q→(iv),R→(iii),S→(i)",
                    "P→(iii),Q→(iv),R→(i),S→(ii)",
                ],
                answer: "P→(ii),Q→(iv),R→(i),S→(iii)",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The value printed by the program `int f(int *p, int n){...}` is:",
                answer: "3",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The value printed by the program `void f(int *p, int m){...}` is:",
                answer: "30",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the output of the pseudo-code with pass by reference and dynamic scoping?",
                options: ["6, 2", "6, 6", "4, 2", "4, 4"],
                answer: "4, 2",
            },
        ],
        7: [
            {
                id: 1,
                type: "nat",
                question:
                    "The output of the program `void mystery(int*ptra,int*ptrb){...}` is:",
                answer: "2016",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which expression will NOT cause a type checking error for `void f(int, short)`?",
                options: ["f(s, *s)", "i=f(i,s)", "f(i,*s)", "f(i,*p)"],
                answer: "f(i,*p)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "The output of the C program with `static int a[]` and `static int *p[]` is:",
                answer: "140",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    'What does the following program print? `char s1[7]="1234", *p=s1+2; *p=\'0\'; printf("%s", s1);`',
                options: ["12", "120400", "1204", "1034"],
                answer: "1204",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    'Which statement is TRUE for the C code `int *pi=&i; scanf("%d",pi);`?',
                options: [
                    "Compilation fails",
                    "Execution results in a run-time error",
                    "Value printed is 5 more than address of i",
                    "Value printed is 5 more than integer value entered",
                ],
                answer: "Value printed is 5 more than integer value entered",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "What is the value printed by `f(a,6)` for `int a[]={12,7,13,4,11,6}`?",
                options: ["-9", "5", "15", "19"],
                answer: "5",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "What does the program `void f(int*p, int*q){p=q; *p=2;} ...` print?",
                options: ["2 2", "2 1", "0 1", "0 2"],
                answer: "0 2",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "On which contents does the binary search program fail?",
                options: [
                    "Y=[1..10], x<10",
                    "Y=[1 3..19], x<1",
                    "Y=[2 2..2], x>2",
                    "Y=[2 4..20], 2<x<20 and x is even",
                ],
                answer: "Y=[2 4..20], 2<x<20 and x is even",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the correction needed in the binary search program?",
                options: [
                    "if(Y[k]<x) i=k+1; else j=k-1;",
                    "if(Y[k]<x) i=k-1; else j=k+1;",
                    "if(Y[k]<x) i=k; else j=k;",
                    "while((Y[k]==x) && (i<j));",
                ],
                answer: "if(Y[k]<x) i=k+1; else j=k-1;",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The output of the program with `fun1` and `fun2` for swapping strings is:",
                options: [
                    "Hi Bye Bye Hi",
                    "Hi Bye Hi Bye",
                    "Bye Hi Hi Bye",
                    "Bye Hi Bye Hi",
                ],
                answer: "Hi Bye Bye Hi",
            },
            {
                id: 11,
                type: "nat",
                question: 'The output of `printlength("abc", "defgh")` is:',
                answer: "3",
            },
            {
                id: 12,
                type: "mcq",
                question: 'What does `printf("%s", p+p[3]-p[1]);` print?',
                options: ["GATE 2011", "E 2011", "2011", "011"],
                answer: "2011",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The value of `SimpleFunction(Z, 10, 2)` for an array Z of 1s is:",
                answer: "1023",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "What is printed by the ANSI C program with a 3D array?",
                options: [
                    "1 2 3, 10 11 12, 19 20 21",
                    "1 4 7, 10 13 16, 19 22 25",
                    "1 2 3, 4 5 6, 7 8 9",
                    "1 2 3, 13 14 15",
                ],
                answer: "1 2 3, 10 11 12, 19 20 21",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    'What is the output of the program `printf("%d", *(arr[1]+9));`?',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
        ],
        8: [
            {
                id: 1,
                type: "nat",
                question: 'The output of `printf("%d", *(*(a+**a+2)+3));` is:',
                answer: "19",
            },
            {
                id: 2,
                type: "nat",
                question: "The value returned by `pp(3, 4)` is:",
                answer: "81",
            },
            {
                id: 3,
                type: "nat",
                question:
                    'The number displayed by `printf("%d\\n", ip[1]);` is:',
                answer: "6",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "The output of the program with `sum = sum + (*b - i) - *(b - i);` is:",
                answer: "10",
            },
            {
                id: 5,
                type: "mcq",
                question: 'The output of `printf("%c, %c", ...)` is:',
                options: ["0, c", "0, a+2", "'0', 'a+2'", "'0', 'c'"],
                answer: "'0', 'c'",
            },
            {
                id: 6,
                type: "mcq",
                question: "The code with `malloc` suffers from which problem?",
                options: [
                    "compiler error (malloc cast)",
                    "compiler error (x==NULL)",
                    "dangling pointer",
                    "memory leak",
                ],
                answer: "memory leak",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "The output of the program that swaps elements in `[3,5,1,4,6,2]` is:",
                answer: "3",
            },
            {
                id: 8,
                type: "nat",
                question:
                    'The output of `printf("%d", (int)strlen(c+2[p]-6[p]-1));` is:',
                answer: "2",
            },
            {
                id: 9,
                type: "mcq",
                question: "The output of invoking `printxy(1,1)` is:",
                options: ["0, 0", "0, 1", "1, 0", "1, 1"],
                answer: "1, 0",
            },
            {
                id: 10,
                type: "mcq",
                question: "Match the following items.",
                options: [
                    "P→(ii),Q→(iv),R→(i),S→(iii)",
                    "P→(ii),Q→(i),R→(iv),S→(iii)",
                    "P→(ii),Q→(iv),R→(iii),S→(i)",
                    "P→(iii),Q→(iv),R→(i),S→(ii)",
                ],
                answer: "P→(ii),Q→(iv),R→(i),S→(iii)",
            },
            {
                id: 11,
                type: "nat",
                question:
                    "The value printed by the program `int f(int *p, int n){...}` is:",
                answer: "3",
            },
            {
                id: 12,
                type: "nat",
                question:
                    "The value printed by the program `void f(int *p, int m){...}` is:",
                answer: "30",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the output of the pseudo-code with pass by reference and dynamic scoping?",
                options: ["6, 2", "6, 6", "4, 2", "4, 4"],
                answer: "4, 2",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The output of the program `void mystery(int*ptra,int*ptrb){...}` is:",
                answer: "2016",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Which expression will NOT cause a type checking error for `void f(int, short)`?",
                options: ["f(s, *s)", "i=f(i,s)", "f(i,*s)", "f(i,*p)"],
                answer: "f(i,*p)",
            },
        ],
        9: [
            {
                id: 1,
                type: "nat",
                question:
                    "What is the output of the C program with `static int a[]` and `static int *p[]`?",
                answer: "140",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    'What does the following C program print? `printf("%d", *(arr[1]+9));`',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
            {
                id: 3,
                type: "nat",
                question:
                    'What is the output of the program `printf("%d", *(*(a+**a+2)+3));`?',
                answer: "19",
            },
            {
                id: 4,
                type: "nat",
                question: "The value returned by `pp(3, 4)` is:",
                answer: "81",
            },
            {
                id: 5,
                type: "nat",
                question:
                    'What number is displayed by `printf("%d\\n", ip[1]);`?',
                answer: "6",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "What is the output of the program with `sum = sum + (*b - i) - *(b - i);`?",
                answer: "10",
            },
            {
                id: 7,
                type: "mcq",
                question: 'What is the output of `printf("%c, %c", ...)`?',
                options: ["0, c", "0, a+2", "'0', 'a+2'", "'0', 'c'"],
                answer: "'0', 'c'",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The C code with `malloc` suffers from which problem?",
                options: [
                    "compiler error (malloc cast)",
                    "compiler error (x==NULL)",
                    "dangling pointer",
                    "memory leak",
                ],
                answer: "memory leak",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "The output of the C program that swaps elements in `[3,5,1,4,6,2]` is:",
                answer: "3",
            },
            {
                id: 10,
                type: "nat",
                question:
                    'The output of `printf("%d", (int)strlen(c+2[p]-6[p]-1));` is:',
                answer: "2",
            },
            {
                id: 11,
                type: "mcq",
                question: "What is the output of invoking `printxy(1,1)`?",
                options: ["0, 0", "0, 1", "1, 0", "1, 1"],
                answer: "1, 0",
            },
            {
                id: 12,
                type: "mcq",
                question: "Match the following items.",
                options: [
                    "P→(ii),Q→(iv),R→(i),S→(iii)",
                    "P→(ii),Q→(i),R→(iv),S→(iii)",
                    "P→(ii),Q→(iv),R→(iii),S→(i)",
                    "P→(iii),Q→(iv),R→(i),S→(ii)",
                ],
                answer: "P→(ii),Q→(iv),R→(i),S→(iii)",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The value printed by the program `int f(int *p, int n){...}` is:",
                answer: "3",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "The value printed by the program `void f(int *p, int m){...}` is:",
                answer: "30",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the output of the pseudo-code with pass by reference and dynamic scoping?",
                options: ["6, 2", "6, 6", "4, 2", "4, 4"],
                answer: "4, 2",
            },
        ],
        10: [
            {
                id: 1,
                type: "nat",
                question:
                    "The output of the program `void mystery(int*ptra,int*ptrb){...}` is:",
                answer: "2016",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Which expression will NOT cause a type checking error for `void f(int, short)`?",
                options: ["f(s, *s)", "i=f(i,s)", "f(i,*s)", "f(i,*p)"],
                answer: "f(i,*p)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "The output of the C program with `static int a[]` and `static int *p[]` is:",
                answer: "140",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    'What does the following C program print? `char s1[7]="1234", *p=s1+2; *p=\'0\'; printf("%s", s1);`',
                options: ["12", "120400", "1204", "1034"],
                answer: "1204",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    'Which statement is TRUE for the C code `int *pi=&i; scanf("%d",pi);`?',
                options: [
                    "Compilation fails",
                    "Execution results in a run-time error",
                    "Value printed is 5 more than address of i",
                    "Value printed is 5 more than integer value entered",
                ],
                answer: "Value printed is 5 more than integer value entered",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "What is the value printed by `f(a,6)` for `int a[]={12,7,13,4,11,6}`?",
                options: ["-9", "5", "15", "19"],
                answer: "5",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "What does the program `void f(int*p, int*q){p=q; *p=2;} ...` print?",
                options: ["2 2", "2 1", "0 1", "0 2"],
                answer: "0 2",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "On which contents does the binary search program fail?",
                options: [
                    "Y=[1..10], x<10",
                    "Y=[1 3..19], x<1",
                    "Y=[2 2..2], x>2",
                    "Y=[2 4..20], 2<x<20 and x is even",
                ],
                answer: "Y=[2 4..20], 2<x<20 and x is even",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "What is the correction needed in the binary search program?",
                options: [
                    "if(Y[k]<x) i=k+1; else j=k-1;",
                    "if(Y[k]<x) i=k-1; else j=k+1;",
                    "if(Y[k]<x) i=k; else j=k;",
                    "while((Y[k]==x) && (i<j));",
                ],
                answer: "if(Y[k]<x) i=k+1; else j=k-1;",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The output of the program with `fun1` and `fun2` for swapping strings is:",
                options: [
                    "Hi Bye Bye Hi",
                    "Hi Bye Hi Bye",
                    "Bye Hi Hi Bye",
                    "Bye Hi Bye Hi",
                ],
                answer: "Hi Bye Bye Hi",
            },
            {
                id: 11,
                type: "nat",
                question: 'The output of `printlength("abc", "defgh")` is:',
                answer: "3",
            },
            {
                id: 12,
                type: "mcq",
                question: 'What does `printf("%s", p+p[3]-p[1]);` print?',
                options: ["GATE 2011", "E 2011", "2011", "011"],
                answer: "2011",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "The value of `SimpleFunction(Z, 10, 2)` for an array Z of 1s is:",
                answer: "1023",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "What is printed by the ANSI C program with a 3D array?",
                options: [
                    "1 2 3, 10 11 12, 19 20 21",
                    "1 4 7, 10 13 16, 19 22 25",
                    "1 2 3, 4 5 6, 7 8 9",
                    "1 2 3, 13 14 15",
                ],
                answer: "1 2 3, 10 11 12, 19 20 21",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    'What is the output of the program `printf("%d", *(arr[1]+9));`?',
                options: ["14", "20", "24", "30"],
                answer: "24",
            },
        ],
    },
    //algo
    10: {
        1: [
            {
                id: 1,
                type: "msq",
                question:
                    "Let f and g be functions where f(n) = n and g(n) = n^2. Which statements are TRUE?",
                options: ["f ∈ O(g)", "f ∈ Ω(g)", "f ∈ o(g)", "f ∈ θ(g)"],
                answer: ["f ∈ O(g)", "f ∈ o(g)"],
            },
            {
                id: 2,
                type: "msq",
                question:
                    "Let f1(n) and f2(n) be the number of times `x=x+1` is executed in Function_1 and Function_2. Function_1 has a while loop `while(n>1)` with a nested for loop `for(i=1 to n)`. Function_2 has a single for loop `for(i=1 to 100*n)`. Which statement is TRUE?",
                options: [
                    "f1(n) ∈ Θ(f2(n))",
                    "f1(n) ∈ o(f2(n))",
                    "f1(n) ∈ ω(f2(n))",
                    "f1(n) ∈ O(n)",
                ],
                answer: ["f1(n) ∈ Θ(f2(n))", "f1(n) ∈ O(n)"],
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Which one of the following statements is TRUE for all positive functions f(n)?",
                options: [
                    "f(n^2) = θ(f(n)^2), when f(n) is a polynomial.",
                    "f(n^2) = o(f(n)^2)",
                    "f(n^2) = O(f(n)^2), when f(n) is an exponential function.",
                    "f(n^2) = Ω(f(n)^2)",
                ],
                answer: "f(n^2) = θ(f(n)^2), when f(n) is a polynomial.",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which option provides the increasing order of asymptotic complexity of functions f1=2^n, f2=n^(3/2), f3=n log_2 n, and f4=n^(log_2 n)?",
                options: [
                    "f3, f2, f4, f1",
                    "f3, f2, f1, f4",
                    "f2, f3, f1, f4",
                    "f2, f3, f4, f1",
                ],
                answer: "f2, f3, f4, f1",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which option arranges the functions f1=10^n, f2=n^(log n), f3=sqrt(n)^n in increasing order of asymptotic growth rate?",
                options: [
                    "f3, f2, f1",
                    "f2, f1, f3",
                    "f1, f2, f3",
                    "f2, f3, f1",
                ],
                answer: "f2, f3, f1",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "What is the CORRECT arrangement of the functions 10, sqrt(n), n, log_2 n, 100/n in increasing order of asymptotic complexity?",
                options: [
                    "log_2 n, 100/n, 10, sqrt(n), n",
                    "100/n, 10, log_2 n, sqrt(n), n",
                    "100/n, 10, sqrt(n), log_2 n, n",
                    "100/n, log_2 n, 10, sqrt(n), n",
                ],
                answer: "100/n, log_2 n, 10, sqrt(n), n",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Let f(n)=n and g(n)=n^(1+sin n). Which statements are correct?\nI: f(n)=O(g(n))\nII: f(n)=Ω(g(n))",
                options: [
                    "Only I",
                    "Only II",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "Neither I nor II",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The equality Σ(i=0 to n) i^3 = X remains correct if X is replaced by:\nI: Θ(n^4)\nII: Θ(n^5)\nIII: O(n^5)\nIV: Ω(n^4)",
                options: [
                    "Only I",
                    "Only II",
                    "I or III or IV but not II",
                    "II or III or IV but not I",
                ],
                answer: "I or III or IV but not II",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "An algorithm performs (logN)^0.5 find, N insert, (logN)^0.5 delete, and (logN)^0.5 decrease-key operations. Which data structure is most suited for the best total asymptotic complexity?",
                options: [
                    "Unsorted array",
                    "Min-heap",
                    "Sorted array",
                    "Sorted doubly linked list",
                ],
                answer: "Unsorted array",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Let W(n) and A(n) be the worst-case and average-case running time of an algorithm. Which is ALWAYS TRUE?",
                options: [
                    "A(n) = Ω(W(n))",
                    "A(n) = Θ(W(n))",
                    "A(n) = O(W(n))",
                    "A(n) = o(W(n))",
                ],
                answer: "A(n) = O(W(n))",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which statement about the asymptotic behavior of f(n)=2^n, g(n)=n!, h(n)=n^(log n) is true?",
                options: [
                    "f(n)=O(g(n)); g(n)=O(h(n))",
                    "f(n)=Ω(g(n)); g(n)=O(h(n))",
                    "g(n)=O(f(n)); h(n)=O(f(n))",
                    "h(n)=O(f(n)); g(n)=Ω(f(n))",
                ],
                answer: "h(n)=O(f(n)); g(n)=Ω(f(n))",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Arrange the functions A=n^(1/3), B=e^n, C=n^(7/4), D=n^(log9 n), E=1.0000001^n in increasing asymptotic order.",
                options: ["A,D,C,E,B", "D,A,C,E,B", "A,C,D,E,B", "A,C,D,B,E"],
                answer: "A,D,C,E,B",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the worst-case time complexity of inserting n elements into an empty linked list, if the list must be maintained in sorted order?",
                options: ["Θ(n log n)", "Θ(n)", "Θ(1)", "Θ(n^2)"],
                answer: "Θ(n^2)",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "The time complexity of the function `int fun(int n){... for(i=1;i<=n;i++) for(j=1;j<n;j+=i) ...}` is:",
                options: ["Θ(n√n)", "Θ(n^2)", "Θ(n log n)", "Θ(n^2 log n)"],
                answer: "Θ(n log n)",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "The worst-case time complexity of a recursive function A(n) is O(n^α). What is the least possible value of α?",
                answer: "2.32",
            },
        ],
        2: [
            {
                id: 1,
                type: "mcq",
                question:
                    "Which of the following most closely approximates the return value of the function `fun1(n)`?",
                options: ["n^3", "n(log n)^2", "n log n", "n log(log n)"],
                answer: "n log(log n)",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The return value of the function `int unknown(int n)` is:",
                options: ["Θ(n^2)", "Θ(n^2 log n)", "Θ(n^3)", "Θ(n^3 log n)"],
                answer: "Θ(n^2 log n)",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Two packages A (0.0001n^2 time) and B (10n log10 n time) are available for processing a database. What is the smallest value of k (for 10^k records) for which package B will be preferred over A?",
                options: ["12", "10", "6", "5"],
                answer: "6",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "The running time of an algorithm is represented by T(n)=T(n/3)+cm for n<=3. Which complexity does this represent?",
                options: ["Θ(n)", "Θ(n log n)", "Θ(n^2)", "Θ(n^2 log n)"],
                answer: "Θ(n)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Consider the recurrence relation: T(n) = T(n/2) + 2T(2n/5) + 7n if n>0, T(n)=1 if n=0. Which option is correct?",
                options: [
                    "T(n) = θ(n log n)",
                    "T(n) = θ(n^(5/2))",
                    "T(n) = θ(n)",
                    "T(n) = θ(log n)^(5/2)",
                ],
                answer: "T(n) = θ(n)",
            },
            {
                id: 6,
                type: "mcq",
                question: "For T(n)=T(n^(1/a))+1 and T(b)=1, what is T(n)?",
                options: [
                    "Θ(log_2 log_2 n)",
                    "Θ(log_a log_b n)",
                    "Θ(log_b log_a n)",
                    "Θ(log_ab n)",
                ],
                answer: "Θ(log_a log_b n)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider the recurrence function T(n) = 2T(sqrt(n))+1 for n>2 and T(n)=2 for 0<n<=2. Then T(n) in terms of Θ notation is:",
                options: ["Θ(log log n)", "Θ(log n)", "Θ(sqrt(n))", "Θ(n)"],
                answer: "Θ(log n)",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Which correctly determines the solution of T(n)=2T(n/2)+log n with T(1)=1?",
                options: ["Θ(n)", "Θ(n log n)", "Θ(n^2)", "Θ(log n)"],
                answer: "Θ(n)",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "For n=2^(2k), the recurrence T(n)=2T(sqrt(n))+sqrt(n) with T(1)=1 evaluates to:",
                options: [
                    "sqrt(n)(log n + 1)",
                    "sqrt(n) log n",
                    "sqrt(n) log sqrt(n)",
                    "n log n",
                ],
                answer: "sqrt(n)(log n + 1)",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Let P be an array. Let t be the lowest upper bound on comparisons to find min and max. Which is correct?",
                options: [
                    "t > n and t <= 3n/2",
                    "t > n and t <= 2n-2",
                    "t > 2n-2",
                    "t > log2(n) and t <= n",
                ],
                answer: "t > n and t <= 3n/2",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "For constants a>=1 and b>1, consider T(n)=aT(n/b)+f(n). Which option is correct?",
                options: [
                    "If f(n)=Θ(n^log_b(a)), then T(n)=Θ(n^log_b(a))",
                    "If f(n)=O(n^(log_b(a)-e)), then T(n)=Θ(n^log_b(a))",
                    "If f(n)=n/log(n), then T(n)=Θ(n log(n))",
                    "If f(n)=n log(n), then T(n)=Θ(n log(n))",
                ],
                answer: "If f(n)=O(n^(log_b(a)-e)), then T(n)=Θ(n^log_b(a))",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "There are n unsorted arrays: A1...An, each with n distinct elements. The worst-case time complexity of computing the median of medians of A1...An is:",
                options: ["O(n log n)", "O(n^2)", "O(n)", "Ω(n^2 log n)"],
                answer: "O(n^2)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is:",
                options: ["Θ(n)", "Θ(log n)", "Θ(log* n)", "Θ(1)"],
                answer: "Θ(log n)",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "Consider a sequence of 14 elements: A=[-5,-10,6,3,-1,-2,13,4,-9,-1,4,12,-3,0]. The maximum subsequence sum S(i,j) is _____.",
                answer: "29",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "An unordered list contains n distinct elements. The number of comparisons to find an element that is neither maximum nor minimum is:",
                options: ["Θ(n log n)", "Θ(n)", "Θ(log n)", "Θ(1)"],
                answer: "Θ(1)",
            },
        ],
        3: [
            {
                id: 1,
                type: "nat",
                question:
                    "The minimum number of comparisons required to find the minimum and the maximum of 100 numbers is _______.",
                answer: "148",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The weight of a sequence a0...an-1 is a0+a1/2+...+an-1/2^(n-1). Let X be max weight of a subsequence of a0...an-1 and Y be that of a1...an-1. Then X is:",
                options: [
                    "max(Y, a0+Y)",
                    "max(Y, a0+Y/2)",
                    "max(Y, a0+2Y)",
                    "a0+Y/2",
                ],
                answer: "max(Y, a0+Y/2)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "An array of 25 distinct elements is to be sorted using quicksort with a random pivot. The probability that the pivot gets placed in the worst possible location in the first round is _____.",
                answer: "0.08",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Which is the recurrence equation for the worst-case time complexity of Quicksort for sorting n numbers?",
                options: [
                    "T(n)=2T(n/2)+cn",
                    "T(n)=T(n-1)+T(1)+cn",
                    "T(n)=2T(n-1)+cn",
                    "T(n)=T(n/2)+cn",
                ],
                answer: "T(n)=T(n-1)+T(1)+cn",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "If you implement quicksort by always choosing the central element of the array as the pivot, the tightest upper bound for the worst-case performance is:",
                options: ["O(n^2)", "O(n log n)", "Θ(n log n)", "O(n^3)"],
                answer: "O(n^2)",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Let P be a quicksort program. Let t1 and t2 be comparisons for inputs [1,2,3,4,5] and [4,1,5,3,2]. Which holds?",
                options: ["t1=5", "t1<t2", "t1>t2", "t1=t2"],
                answer: "t1>t2",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "In quick sort, if the (n/4)th smallest element is selected as pivot using an O(n) algorithm, what is the worst case time complexity?",
                options: ["θ(n)", "θ(n log n)", "θ(n^2)", "θ(n^2 log n)"],
                answer: "θ(n log n)",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "A procedure for finding a pivot splits a list into sub-lists, each with at least one-fifth of the elements. Then T(n) is:",
                options: [
                    "T(n)<=2T(n/5)+n",
                    "T(n)<=T(n/5)+T(4n/5)+n",
                    "T(n)<=2T(4n/5)+n",
                    "T(n)<=2T(n/2)+n",
                ],
                answer: "T(n)<=2T(4n/5)+n",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A merge sort algorithm takes 30 seconds for an input of size 64. What is the max input size that can be solved in 6 minutes?",
                options: ["256", "512", "1024", "2048"],
                answer: "512",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "The worst-case running time to sort n strings, each of length n, into lexicographic order using merge sort is:",
                options: [
                    "O(n log n)",
                    "O(n^2 log n)",
                    "O(n^2+log n)",
                    "O(n^2)",
                ],
                answer: "O(n^2 log n)",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "Which algorithm uses the least number of comparisons to sort the array [23,32,45,69,72,73,89,97] in ascending order?",
                options: [
                    "Quicksort using the last element as pivot",
                    "Selection Sort",
                    "Mergesort",
                    "Insertion sort",
                ],
                answer: "Insertion sort",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "The worst-case running times of Insertion sort, Merge sort, and Quick sort are respectively:",
                options: [
                    "Θ(n log n),Θ(n log n),Θ(n^2)",
                    "Θ(n^2),Θ(n^2),Θ(n log n)",
                    "Θ(n^2),Θ(n log n),Θ(n log n)",
                    "Θ(n^2),Θ(n log n),Θ(n^2)",
                ],
                answer: "Θ(n^2),Θ(n log n),Θ(n^2)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "If the input is already in ascending order, which are TRUE?\nI: Quick sort runs in Θ(n^2)\nII: Bubble sort runs in Θ(n^2)\nIII: Merge sort runs in Θ(n)\nIV: Insertion sort runs in Θ(n)",
                options: [
                    "I and II only",
                    "I and III only",
                    "II and IV only",
                    "I and IV only",
                ],
                answer: "I and IV only",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "What is the tightest upper bound for the number of swaps required to sort n numbers using selection sort?",
                options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
                answer: "O(n)",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the number of swaps required to sort n elements using selection sort, in the worst case?",
                options: ["Θ(n)", "Θ(n log n)", "Θ(n^2)", "Θ(n^2 log n)"],
                answer: "Θ(n)",
            },
        ],
        4: [
            {
                id: 1,
                type: "mcq",
                question:
                    "We have a binary heap on n elements and wish to insert n more elements. The total time required is:",
                options: ["Θ(log n)", "Θ(n)", "Θ(n log n)", "Θ(n^2)"],
                answer: "Θ(n)",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "What is the worst-case time complexity of an optimal algorithm to find the maximum element in a binary min-heap of n elements?",
                options: ["Θ(1)", "Θ(log n)", "Θ(n)", "Θ(n log n)"],
                answer: "Θ(n)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "What is the minimum number of comparisons required to find the maximum in a binary min-heap containing 1023 elements?",
                answer: "511",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "The number of possible min-heaps containing each value from {1,2,3,4,5,6,7} exactly once is ____.",
                answer: "80",
            },
            {
                id: 5,
                type: "nat",
                question:
                    "A complete binary min-heap is made by including each integer in [1,1023] exactly once. What is the maximum depth at which integer 9 can appear?",
                answer: "8",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "The minimum number of interchanges needed to convert the array <89,19,50,17,12,15,2,5,7,11,6,9,100> into a max-heap is:",
                options: ["4", "5", "2", "3"],
                answer: "3",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Consider a max heap represented by the array: 40,30,20,10,15,16,17,8,4. After inserting 35, the new heap is:",
                options: [
                    "[40,30,20,10,15,16,17,8,4,35]",
                    "[40,35,20,10,30,16,17,8,4,15]",
                    "[40,30,20,10,35,16,17,8,4,15]",
                    "[40,35,20,10,15,16,17,8,4,30]",
                ],
                answer: "[40,35,20,10,15,16,17,8,4,30]",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "The number of elements that can be sorted in Θ(log n) time using heap sort is:",
                options: [
                    "Θ(1)",
                    "Θ(sqrt(log n))",
                    "Θ(log n / log log n)",
                    "Θ(log n)",
                ],
                answer: "Θ(log n / log log n)",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "A max-heap is a heap where the value of each parent is greater than or equal to the value of its children. Which of the given trees is a max-heap?",
                options: ["(a)", "(b)", "(c)", "(d)"],
                answer: "(b)",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "P,Q,R,S,T are sorted sequences of lengths 20,24,30,35,50. What is the number of comparisons needed in the worst case by the optimal algorithm to merge them into a single sequence?",
                answer: "358",
            },
            {
                id: 11,
                type: "msq",
                question:
                    "Consider the string 'abbccddeee'. Each letter is assigned a binary code. Which properties must the code have for minimum length?",
                options: [
                    "Prefix code property",
                    "Shorter codes for higher frequency letters",
                    "Fixed length codes",
                    "Huffman coding principles",
                ],
                answer: [
                    "Prefix code property",
                    "Shorter codes for higher frequency letters",
                    "Huffman coding principles",
                ],
            },
            {
                id: 12,
                type: "nat",
                question:
                    "A message is made of characters from {P,Q,R,S,T} with given probabilities. Using Huffman coding, what is the expected length of the encoded message of 100 characters?",
                answer: "225",
            },
            {
                id: 13,
                type: "nat",
                question:
                    "A graph has 8 edges with distinct integer weights. Its MST has weight 36 and contains edges {(A,C),(B,C),(B,E),(E,F),(D,F)}. What is the minimum possible sum of weights of all 8 edges?",
                answer: "69",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Which is NOT the sequence of edges added to the MST using Kruskal's algorithm for the given graph?",
                options: [
                    "(b,e)(e,f)(a,c)(b,c)(f,g)(c,d)",
                    "(b,e)(e,f)(a,c)(f,g)(b,c)(c,d)",
                    "(b,e)(a,c)(e,f)(b,c)(f,g)(c,d)",
                    "(b,e)(e,f)(b,c)(a,c)(f,g)(c,d)",
                ],
                answer: "(b,e)(e,f)(b,c)(a,c)(f,g)(c,d)",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Let G be a connected undirected edge-weighted graph with distinct positive weights. Which statements are necessarily true?\nI. Minimum Spanning Tree of G is always unique.\nII. Shortest path between any two vertices of G is always unique.",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "I only",
            },
        ],
        5: [
            {
                id: 1,
                type: "nat",
                question:
                    "Consider a graph G=(V,E) where V={v1...v100}, E={{vi,vj} | |i-j|}, and weight(vi,vj)=|i-j|. The weight of the minimum spanning tree of G is ____.",
                answer: "99",
            },
            {
                id: 2,
                type: "nat",
                question:
                    "Choose a value of x that will maximize the number of minimum weight spanning trees (MWSTs) of the given graph. The number of MWSTs for this x is _____.",
                answer: "4",
            },
            {
                id: 3,
                type: "mcq",
                question:
                    "Let G be a weighted connected undirected graph with distinct positive edge weights. If every edge weight is increased by the same value, which statements are TRUE?\nP: MST of G does not change.\nQ: Shortest path between any pair of vertices does not change.",
                options: [
                    "P only",
                    "Q only",
                    "Neither P nor Q",
                    "Both P and Q",
                ],
                answer: "P only",
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Let G be a complete undirected graph on 4 vertices with edge weights 1,2,3,4,5,6. The maximum possible weight of an MST of G is _____.",
                answer: "7",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "G=(V,E) is an undirected simple graph with distinct edge weights. Which statements about MSTs are TRUE?\nI: If e is the lightest edge of some cycle, every MST includes e.\nII: If e is the heaviest edge of some cycle, every MST excludes e.",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "II only",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Let T be an MST of a weighted undirected graph G. A new weighted edge (u,v) is added to G. The worst-case time complexity of determining if T is still an MST is:",
                options: ["Θ(|E|+|V|)", "Θ(|E||V|)", "Θ(|E|log|V|)", "Θ(|V|)"],
                answer: "Θ(|V|)",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Dijkstra's algorithm run from vertex a on the given graph computes the correct shortest path distance to:",
                options: [
                    "Only vertex a",
                    "Only vertices a, e, f, g, h",
                    "Only vertices a, b, c, d",
                    "All the vertices",
                ],
                answer: "All the vertices",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Consider the directed graph shown. Which one will be reported by Dijkstra's algorithm as the shortest path from S to T?",
                options: ["SDT", "SBDT", "SACDT", "SACET"],
                answer: "SACET",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Let G=(V,E) be a directed, weighted graph with weight function w. For f:V->R, define w'(u,v)=w(u,v)+f(u)-f(v). The shortest paths in G under w are shortest paths under w' too, if:",
                options: [
                    "for every f:V->R",
                    "if and only if f(u) is positive for all u",
                    "if and only if f(u) is negative for all u",
                    "if and only if f(u) is the distance from a new source s to u",
                ],
                answer: "for every f:V->R",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "In a weighted undirected graph with 4 vertices, what is the largest integer value of x for which at least one shortest path between some pair of vertices will contain the edge with weight x?",
                answer: "12",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the cost of the Minimum Spanning Tree (MST) of a graph with n nodes where nodes vi, vj are connected if 0<|i-j|<2 and edge weight is i+j?",
                options: ["(1/12)(11n^2-5n)", "n^2-n+1", "6n-11", "2n+1"],
                answer: "n^2-n+1",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "What is the length of the path from v5 to v6 in the MST of the previous question with n=10?",
                options: ["11", "25", "31", "41"],
                answer: "31",
            },
            {
                id: 13,
                type: "msq",
                question:
                    "Let G be a weighted graph and G' be the graph with squared edge weights. Let T and T' be their respective MSTs. Which statements are TRUE?",
                options: [
                    "T'=T with total weight t'^2",
                    "T'=T with total weight t'<t^2",
                    "T'!=T but total weight t'=t^2",
                    "None of the above",
                ],
                answer: ["T'=T with total weight t'<t^2"],
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "What is the minimum possible weight of a spanning tree T in the given graph such that vertex 0 is a leaf node?",
                options: ["7", "8", "9", "10"],
                answer: "9",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What is the minimum possible weight of a path P from vertex 1 to vertex 2 in the graph such that P contains at most 3 edges?",
                options: ["7", "8", "9", "10"],
                answer: "8",
            },
        ],
        6: [
            {
                id: 1,
                type: "nat",
                question:
                    "Let U={1,2,3}. Let G be a graph with vertex set 2^U. (A,B) is an edge if A is a proper subset of B or B is a proper subset of A. What is the cardinality of B(Φ), the set of all possible BFS orderings starting from the empty set?",
                answer: "5040",
            },
            {
                id: 2,
                type: "msq",
                question:
                    "An articulation point in a connected graph is a vertex whose removal disconnects the graph. Which options are correct regarding a DFS tree T of a connected undirected graph G?",
                options: [
                    "Root of T can never be an articulation point in G.",
                    "Root of T is an articulation point if it has 2 or more children.",
                    "A leaf of T can be an articulation point in G.",
                    "If u is an articulation point, all paths from an ancestor x to a descendant y must pass through u.",
                ],
                answer: [
                    "Root of T is an articulation point if it has 2 or more children.",
                    "If u is an articulation point, all paths from an ancestor x to a descendant y must pass through u.",
                ],
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Consider a complete binary tree with 7 nodes. Let A be the set of the first 3 elements from a BFS starting at the root, and B be the set from a DFS. What is the value of |A-B|?",
                answer: "1",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "Let G be a simple undirected graph. Let TD be a DFS tree and TB be a BFS tree. Which statements must be true?\nI. No edge of G is a cross edge w.r.t. TD.\nII. For every edge (u,v) of G, if u is at depth i and v is at depth j in TB, then |i-j|=1.",
                options: [
                    "I only",
                    "II only",
                    "Both I and II",
                    "Neither I nor II",
                ],
                answer: "Both I and II",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "The BFS algorithm is implemented using a queue. Which is a possible order of visiting the nodes in the graph shown?",
                options: ["MNOPQR", "NQMPOR", "QMNROP", "POQNMR"],
                answer: "POQNMR",
            },
            {
                id: 6,
                type: "nat",
                question:
                    "The number of different topological orderings of the vertices of the given directed graph is ______.",
                answer: "6",
            },
            {
                id: 7,
                type: "nat",
                question:
                    "BFS is started on a binary tree from the root. A vertex t is at distance four from the root. If t is the nth vertex in the BFS traversal, what is the maximum possible value of n?",
                answer: "31",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "Let G=(V,E) be a simple undirected graph, and s be a source vertex. If (u,v) is an edge of G not in the BFS tree T, which one of the following CANNOT be the value of d(u)-d(v)?",
                options: ["-1", "0", "1", "2"],
                answer: "2",
            },
            {
                id: 9,
                type: "nat",
                question:
                    "Suppose DFS is executed on the graph below starting at some unknown vertex. What is the maximum possible recursion depth (including the initial call)?",
                answer: "19",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "What is the tightest upper bound on the running time of DFS on a graph with n vertices and m edges, represented as an adjacency matrix?",
                options: ["Θ(n)", "Θ(n+m)", "Θ(n^2)", "Θ(m^2)"],
                answer: "Θ(n^2)",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "The tree arcs of a BFS traversal from a source node W in an unweighted, connected, undirected graph form a tree T. This tree is a data structure for computing:",
                options: [
                    "The shortest path between every pair of vertices.",
                    "The shortest path from W to every vertex in the graph.",
                    "The shortest paths from W to only leaf nodes of T.",
                    "The longest path in the graph.",
                ],
                answer: "The shortest path from W to every vertex in the graph.",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Consider the directed graph given. Which of the following is TRUE?",
                options: [
                    "The graph does not have any topological ordering.",
                    "Both PQRS and SRQP are topological orderings.",
                    "Both PSRQ and SPRQ are topological orderings.",
                    "PSRQ is the only topological ordering.",
                ],
                answer: "PSRQ is the only topological ordering.",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "A DFS is started at node a. Which are possible output sequences of visited nodes?",
                options: [
                    "1 and 3 only",
                    "2 and 3 only",
                    "2, 3 and 4 only",
                    "1, 2 and 3",
                ],
                answer: "1 and 3 only",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "A BFS algorithm is implemented using a queue. One possible order of visiting the nodes of the given graph is:",
                options: ["MNOPQR", "NQMPOR", "QMNPRO", "QMNPOR"],
                answer: "QMNPOR",
            },
            {
                id: 15,
                type: "nat",
                question:
                    "Consider two strings A='qpqri' and B='pqprqrp'. Let x be the length of the LCS and y be the number of such LCSs. Then x+10y = _____.",
                answer: "34",
            },
        ],
        7: [
            {
                id: 1,
                type: "mcq",
                question:
                    "What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of n vertices?",
                options: ["Θ(n^2)", "Θ(n^2 log n)", "Θ(n^3)", "Θ(n^3 log n)"],
                answer: "Θ(n^3)",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "The recurrence relation capturing the optimal execution time of the Tower of Hanoi problem with n discs is:",
                options: [
                    "T(n)=2T(n-2)+2",
                    "T(n)=2T(n-1)+n",
                    "T(n)=2T(n/2)+1",
                    "T(n)=2T(n-1)+1",
                ],
                answer: "T(n)=2T(n-1)+1",
            },
            {
                id: 3,
                type: "msq",
                question:
                    "Define Rn as the maximum amount earned by cutting a rod of length n. Given prices p[1]..p[7], which statements are correct about R7?",
                options: [
                    "R7=18",
                    "R7=19",
                    "R7 is achieved by three different solutions.",
                    "R7 cannot be achieved by a solution consisting of three pieces.",
                ],
                answer: [
                    "R7=18",
                    "R7 is achieved by three different solutions.",
                ],
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "An algorithm finds the length of the longest monotonically increasing sequence in an array A[0:n-1]. Which statement is TRUE?",
                options: [
                    "The algorithm uses dynamic programming paradigm.",
                    "The algorithm has a linear complexity and uses branch and bound.",
                    "The algorithm has non-linear polynomial complexity and uses branch and bound.",
                    "The algorithm uses divide and conquer paradigm.",
                ],
                answer: "The algorithm uses dynamic programming paradigm.",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Which statement(s) is/are correct regarding Bellman-Ford shortest path algorithm? P: Always finds a negative weighted cycle. Q: Finds if any negative weighted cycle is reachable from the source.",
                options: [
                    "P only",
                    "Q only",
                    "both P and Q",
                    "Neither P nor Q",
                ],
                answer: "Q only",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "For finding the LCS of X[m] and Y[n], which option for expr2 in the recursive definition l(i,j) is correct?",
                options: [
                    "l(i-1,j)+1",
                    "l(i,j-1)",
                    "max(l(i-1,j), l(i,j-1))",
                    "max(l(i-1,j-1), l(i,j))",
                ],
                answer: "max(l(i-1,j), l(i,j-1))",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "Which statement is TRUE for the dynamic programming solution for LCS using an array L[M,N]?",
                options: [
                    "All elements of L should be initialized to 0.",
                    "The values may be computed in row-major or column-major order.",
                    "The values cannot be computed in either row-major or column-major order.",
                    "L[p,q] needs to be computed before L[r,s] if p<r or q<s.",
                ],
                answer: "The values may be computed in row-major or column-major order.",
            },
            {
                id: 8,
                type: "mcq",
                question:
                    "What are the running times of f1(n) = 2*f1(n-1)+3*f1(n-2) and f2(n) which uses a for loop up to n?",
                options: [
                    "Θ(n) and Θ(n)",
                    "Θ(2^n) and Θ(n)",
                    "Θ(n) and Θ(2^n)",
                    "Θ(2^n) and Θ(2^n)",
                ],
                answer: "Θ(2^n) and Θ(n)",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "For the subset-sum problem, which entry of the array X, if TRUE, implies a solution exists for weight W?",
                options: ["X[1,W]", "X[n,0]", "X[n,W]", "X[n-1,n]"],
                answer: "X[n,W]",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Which recurrence is valid for the subset-sum problem's dynamic programming solution X[i,j]?",
                options: [
                    "X[i,j]=X[i-1,j] v X[i,j-ai]",
                    "X[i,j]=X[i-1,j] v X[i-1,j-ai]",
                    "X[i,j]=X[i-1,j] ^ X[i,j-ai]",
                    "X[i,j]=X[i-1,j] ^ X[i-1,j-ai]",
                ],
                answer: "X[i,j]=X[i-1,j] v X[i-1,j-ai]",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "An algorithm Q solves the subset-sum problem in O(nW) time. Which statement is false?",
                options: [
                    "Q solves in polynomial time if input is unary.",
                    "Q solves in polynomial time if input is binary.",
                    "The subset-sum problem is in NP.",
                    "The subset-sum problem is NP-hard.",
                ],
                answer: "Q solves in polynomial time if input is binary.",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Match the algorithm with its design paradigm: (P) Kruskal, (Q) Quicksort, (R) Floyd-Warshall.",
                options: [
                    "P-ii,Q-iii,R-i",
                    "P-iii,Q-i,R-ii",
                    "P-ii,Q-i,R-iii",
                    "P-i,Q-ii,R-iii",
                ],
                answer: "P-ii,Q-i,R-iii",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "The Floyd-Warshall algorithm for all-pair shortest paths is based on:",
                options: [
                    "Greedy paradigm",
                    "Divide-and-conquer paradigm",
                    "Dynamic programming paradigm",
                    "Neither",
                ],
                answer: "Dynamic programming paradigm",
            },
            {
                id: 14,
                type: "nat",
                question:
                    "For the 0/1 Knapsack problem with items (10,60), (7,28), (4,20), (2,24) and max weight 11, what is Vopt-Vgreedy?",
                answer: "16",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "For the matrix chain F1F2F3F4F5 with given dimensions, which are the explicitly computed pairs in the optimal parenthesization?",
                options: [
                    "F1F2 and F3F4 only",
                    "F2F3 only",
                    "F3F4 only",
                    "F1F2 and F4F5 only",
                ],
                answer: "F3F4 only",
            },
        ],
        8: [
            {
                id: 1,
                type: "nat",
                question:
                    "What is the minimum number of scalar multiplications required to find the product A1A2A3A4 with dimensions 10x5, 5x20, 20x10, 10x5?",
                answer: "1500",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "For matrices M1(pxq), M2(qxr), M3(rxs), M4(sxt), if p=10, q=100, r=20, s=5, t=80, what is the minimum number of scalar multiplications needed?",
                options: ["248000", "44000", "19000", "25000"],
                answer: "19000",
            },
            {
                id: 3,
                type: "msq",
                question:
                    "Consider a simple undirected weighted graph G. Which statements about its MSTs are TRUE?\n(a) The edge with the second smallest weight is always in any MST.\n(c) The edge with minimum weight connecting S and V\\S is always in any MST.",
                options: ["a", "b", "c", "d"],
                answer: ["a", "c"],
            },
            {
                id: 4,
                type: "nat",
                question:
                    "Let G(V,E) be a directed graph with V={1,2,3,4,5}. A[i][j]=1 if j<=i. The number of directed spanning trees rooted at vertex 5 is _____.",
                answer: "24",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "Let G be a connected undirected weighted graph. Which statements are correct?\nS1: There exists a minimum weight edge in G which is present in every MST.\nS2: If every edge weight is distinct, G has a unique MST.",
                options: [
                    "S1 is false and S2 is true",
                    "Both S1 and S2 are false",
                    "S1 is true and S2 is false",
                    "Both S1 and S2 are true",
                ],
                answer: "S1 is false and S2 is true",
            },
            {
                id: 6,
                type: "msq",
                question:
                    "Consider the directed graph shown. Which of the following is/are correct?\n(b) A depth-first traversal starting at S classifies three directed edges as back edges.\n(d) The graph does not have a strongly connected component.",
                options: ["a", "b", "c", "d"],
                answer: ["b", "d"],
            },
            {
                id: 7,
                type: "nat",
                question:
                    "In a directed acyclic graph, the sum of the quality-scores of all the vertices is_____.",
                answer: "929",
            },
            {
                id: 8,
                type: "nat",
                question:
                    "The number of minimum-weight spanning trees of the given graph is _____.",
                answer: "3",
            },
            {
                id: 9,
                type: "mcq",
                question:
                    "Match the following: A: Prim's, B: Floyd-Warshall, C: Mergesort, D: Hamiltonian circuit.",
                options: [
                    "A-3,B-2,C-4,D-1",
                    "A-1,B-2,C-4,D-3",
                    "A-2,B-3,C-4,D-1",
                    "A-2,B-1,C-3,D-4",
                ],
                answer: "A-2,B-3,C-4,D-1",
            },
            {
                id: 10,
                type: "mcq",
                question:
                    "Match the algorithm to its design paradigm: A: Dijkstra, B: Floyd-Warshall, C: Binary search, D: Backtracking search.",
                options: [
                    "A-1,B-3,C-1,D-5",
                    "A-3,B-22,C-1,D-5",
                    "A-3,B-2,C-1,D-4",
                    "A-3,B-2,C-1,D-5",
                ],
                answer: "A-3,B-2,C-1,D-5",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "What is the time complexity to set the twin pointer in each entry of an adjacency list representation of a graph?",
                options: ["Θ(n^2)", "Θ(n+m)", "Θ(m^2)", "Θ(n^4)"],
                answer: "Θ(n+m)",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "The most efficient algorithm for finding connected components in an undirected graph has time complexity:",
                options: ["Θ(n)", "Θ(m)", "Θ(m+n)", "Θ(mn)"],
                answer: "Θ(m+n)",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "What is the worst-case time complexity of inserting n^2 elements into an AVL-tree with n elements initially?",
                options: ["Θ(n^4)", "Θ(n^2 log n)", "Θ(n^3)", "Θ(n^2)"],
                answer: "Θ(n^2 log n)",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "In a balanced BST with n elements, what is the worst-case time complexity of reporting all K elements in range [a,b]?",
                options: [
                    "Θ(log n)",
                    "Θ(n log k)",
                    "Θ(log n + k)",
                    "Θ(k log n)",
                ],
                answer: "Θ(log n + k)",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "What are the worst-case complexities of insertion and deletion of a key in a binary search tree?",
                options: [
                    "Θ(log n) for both",
                    "Θ(n) for both",
                    "Θ(n) for insertion, Θ(log n) for deletion",
                    "Θ(log n) for insertion, Θ(n) for deletion",
                ],
                answer: "Θ(n) for both",
            },
        ],
        9: [
            {
                id: 1,
                type: "nat",
                question:
                    "Let G be a connected undirected graph of 100 vertices and 300 edges. MST weight is 500. If each edge weight is increased by five, the new MST weight becomes ____.",
                answer: "995",
            },
            {
                id: 2,
                type: "mcq",
                question:
                    "Consider a complete binary tree where left and right subtrees of the root are max-heaps. The lower bound for operations to convert it to a heap is:",
                options: ["Ω(log n)", "Ω(n)", "Ω(n log n)", "Ω(n^2)"],
                answer: "Ω(log n)",
            },
            {
                id: 3,
                type: "nat",
                question:
                    "Suppose we have a balanced BST holding n numbers. We are given L and H and wish to sum all m numbers between them. If the tightest upper bound is O(n^a log^b n + m^c log^d n), what is a+10b+100c+1000d?",
                answer: "110",
            },
            {
                id: 4,
                type: "mcq",
                question:
                    "What is the tightest upper bound for inserting an object into a binary search tree of n nodes?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                answer: "O(n)",
            },
            {
                id: 5,
                type: "mcq",
                question:
                    "The worst-case running time to search for an element in a balanced binary search tree with n*2^n elements is:",
                options: ["Θ(n log n)", "Θ(n*2^n)", "Θ(n)", "Θ(log n)"],
                answer: "Θ(n)",
            },
            {
                id: 6,
                type: "mcq",
                question:
                    "Match the algorithms with their time complexities: (P) Tower of Hanoi, (Q) Binary search, (R) Heap sort, (S) Addition of two nxn matrices",
                options: [
                    "P-iii,Q-iv,R-i,S-ii",
                    "P-iv,Q-iii,R-i,S-ii",
                    "P-iii,Q-iv,R-ii,S-i",
                    "P-iv,Q-iii,R-ii,S-i",
                ],
                answer: "P-iii,Q-iv,R-ii,S-i",
            },
            {
                id: 7,
                type: "mcq",
                question:
                    "If we use Radix Sort to sort n integers in the range (n^(k/12), n^k), the time taken would be:",
                options: ["Θ(n)", "Θ(kn)", "Θ(n log n)", "Θ(n^2)"],
                answer: "Θ(n)",
            },
            {
                id: 8,
                type: "msq",
                question:
                    "Let G be a simple, finite, undirected graph. Which statements are TRUE?\n(a) This procedure results in a proper vertex coloring of G.\n(b) The number of colors used is at most Δ(G)+1.",
                options: ["a", "b", "c", "d"],
                answer: ["a", "b"],
            },
            {
                id: 9,
                type: "nat",
                question:
                    "In an undirected connected planar graph G, there are eight vertices and five faces. The number of edges in G is ____.",
                answer: "11",
            },
            {
                id: 10,
                type: "nat",
                question:
                    "Let G be a connected planar graph with 10 vertices. If the number of edges on each face is three, then the number of edges in G is ____.",
                answer: "24",
            },
            {
                id: 11,
                type: "mcq",
                question:
                    "For all planar graphs on n vertices with minimum degree δ>3, which is TRUE?",
                options: [
                    "Number of faces is at least n/2+2",
                    "Number of faces is less than n/2+2",
                    "There is a planar embedding where faces < n/2+2",
                    "There is a planar embedding where faces <= n/(δ+1)",
                ],
                answer: "Number of faces is at least n/2+2",
            },
            {
                id: 12,
                type: "mcq",
                question:
                    "Let G be a simple undirected planar graph on 10 vertices with 15 edges. If G is connected, the number of bounded faces is:",
                options: ["3", "4", "5", "6"],
                answer: "6",
            },
            {
                id: 13,
                type: "mcq",
                question:
                    "An algorithm has to store several keys generated by a malicious adversary in a hash table. What is the best hashing strategy to counteract the adversary?",
                options: [
                    "Division method",
                    "Multiplication method",
                    "Universal hashing method",
                    "Prime division or multiplication method",
                ],
                answer: "Universal hashing method",
            },
            {
                id: 14,
                type: "mcq",
                question:
                    "Consider a hash table with 100 slots using chaining. What is the probability that the first 3 slots are unfilled after 3 insertions?",
                options: [
                    "(97*97*97)/100^3",
                    "(99*98*97)/100^3",
                    "(97*96*95)/100^3",
                    "(97*96*95)/(3!*100^3)",
                ],
                answer: "(97*97*97)/100^3",
            },
            {
                id: 15,
                type: "mcq",
                question:
                    "Consider a hash table with 9 slots using chaining (h(k)=k mod 9). For keys 5,28,19,15,20,33,12,17,10, what are the max, min, and average chain lengths?",
                options: ["3,0,1", "3,3,3", "4,0,1", "3,0,2"],
                answer: "3,0,1",
            },
        ],
    },
};

export default questionBank;
