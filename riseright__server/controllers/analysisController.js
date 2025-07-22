import Analysis from '../models/Analysis.js';

// @desc    Create a new analysis entry
// @route   POST /api/analysis
// @access  Private
export const createAnalysis = async (req, res) => {
  try {
    const { title, description, data } = req.body;

    const analysis = new Analysis({
      user: req.user._id,
      title,
      description,
      data
    });

    const savedAnalysis = await analysis.save();
    res.status(201).json(savedAnalysis);
  } catch (error) {
    console.error('Error creating analysis:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all analyses for logged-in user
// @route   GET /api/analysis
// @access  Private
export const getAllAnalyses = async (req, res) => {
  try {
    const analyses = await Analysis.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(analyses);
  } catch (error) {
    console.error('Error fetching analyses:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get a specific analysis by ID
// @route   GET /api/analysis/:id
// @access  Private
export const getAnalysisById = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({ _id: req.params.id, user: req.user._id });

    if (!analysis) {
      return res.status(404).json({ message: 'Analysis not found' });
    }

    res.status(200).json(analysis);
  } catch (error) {
    console.error('Error fetching analysis:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a specific analysis
// @route   PUT /api/analysis/:id
// @access  Private
export const updateAnalysis = async (req, res) => {
  try {
    const { title, description, data } = req.body;

    const updatedAnalysis = await Analysis.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, description, data },
      { new: true }
    );

    if (!updatedAnalysis) {
      return res.status(404).json({ message: 'Analysis not found or not authorized' });
    }

    res.status(200).json(updatedAnalysis);
  } catch (error) {
    console.error('Error updating analysis:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a specific analysis
// @route   DELETE /api/analysis/:id
// @access  Private
export const deleteAnalysis = async (req, res) => {
  try {
    const deleted = await Analysis.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!deleted) {
      return res.status(404).json({ message: 'Analysis not found or not authorized' });
    }

    res.status(200).json({ message: 'Analysis deleted successfully' });
  } catch (error) {
    console.error('Error deleting analysis:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
